import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Switch,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";

interface Product {
  id: string;
  name: string;
  type: string;
}

interface SelectedProduct {
  product: Product;
  seats: number;
}

interface Props {
  products: Product[];
  className?: string;
  label?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function TeamQuoteCTA({
  products,
  className,
  label = "Get a Team Quote",
}: Props) {
  const [open, setOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<SelectedProduct[]>([]);
  const [status, setStatus] = useState<Status>("idle");

  const selectedIds = useMemo(
    () => new Set(selected.map((s) => s.product.id)),
    [selected],
  );

  const searchResults = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return [];
    return products.filter(
      (p) =>
        !selectedIds.has(p.id) &&
        (p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q)),
    );
  }, [products, search, selectedIds]);

  function addProduct(product: Product) {
    setSelected((prev) => [...prev, { product, seats: 1 }]);
    setSearch("");
  }

  function removeProduct(id: string) {
    setSelected((prev) => prev.filter((s) => s.product.id !== id));
  }

  function updateSeats(id: string, value: number) {
    setSelected((prev) =>
      prev.map((s) =>
        s.product.id === id ? { ...s, seats: Math.max(1, value || 1) } : s,
      ),
    );
  }

  function openModal() {
    setStatus("idle");
    setAgreed(false);
    setShowSelector(false);
    setSearch("");
    setSelected([]);
    setOpen(true);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    if (selected.length > 0) {
      const productList = selected
        .map(
          ({ product, seats }) =>
            `- ${product.name}: ${seats} seat${seats !== 1 ? "s" : ""}`,
        )
        .join("\n");
      const originalMessage = (data.get("message") as string) || "";
      data.set(
        "message",
        originalMessage +
          (originalMessage ? "\n\n" : "") +
          "Products requested:\n" +
          productList,
      );
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const buttonClass =
    className ??
    "inline-block rounded-md bg-cta px-6 py-3 text-sm font-semibold text-ctatext shadow-sm transition-colors hover:bg-accent-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-1";

  return (
    <>
      <button type="button" onClick={openModal} className={buttonClass}>
        {label}
      </button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Scroll container */}
        <div className="fixed inset-0 flex items-start justify-center overflow-y-auto p-4 sm:p-8">
          <DialogPanel className="relative my-8 w-full max-w-2xl rounded-3xl bg-secondary shadow-2xl">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-md p-1.5 text-content-2 transition-colors hover:text-content focus:outline-none"
              aria-label="Close dialog"
            >
              <XMarkIcon className="size-5" aria-hidden="true" />
            </button>

            {status === "success" ? (
              <div className="px-6 py-16 text-center sm:px-12">
                <p className="text-3xl font-bold text-content">
                  You're all set!
                </p>
                <p className="mt-3 text-content-1">
                  We'll get back to you within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-8 rounded-md bg-cta px-5 py-2.5 text-sm font-semibold text-ctatext transition-colors hover:bg-accent-1 hover:text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="px-6 py-8 sm:px-12 sm:py-10">
                <div className="mb-6 text-center">
                  <DialogTitle className="text-2xl font-bold tracking-tight text-content sm:text-3xl">
                    Get a Team Quote
                  </DialogTitle>
                  <p className="mt-2 text-content-1">
                    Tell us your team size and what you're working on.
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="access_key"
                    value="16c01467-967d-411c-a15c-e5e9e4a936f3"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="Team Quote Request — Rock The JVM"
                  />
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />
                  <input type="hidden" name="from_name" value="Rock The JVM" />

                  <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="tq-name"
                        className="block text-sm font-semibold leading-6 text-content"
                      >
                        Name
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="tq-name"
                          name="name"
                          type="text"
                          autoComplete="given-name"
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="tq-email"
                        className="block text-sm font-semibold leading-6 text-content"
                      >
                        Email
                      </label>
                      <div className="mt-2.5">
                        <input
                          id="tq-email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="tq-message"
                        className="block text-sm font-semibold leading-6 text-content"
                      >
                        Message
                      </label>
                      <div className="mt-2.5">
                        <textarea
                          id="tq-message"
                          name="message"
                          rows={4}
                          required
                          className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
                          defaultValue=""
                        />
                      </div>
                    </div>

                    {/* Product selector */}
                    <div className="sm:col-span-2">
                      {!showSelector ? (
                        <button
                          type="button"
                          onClick={() => setShowSelector(true)}
                          className="text-sm font-semibold text-accent-1 hover:underline"
                        >
                          + Specify products (optional)
                        </button>
                      ) : (
                        <div className="rounded-xl border border-content/20 p-4">
                          <p className="mb-3 text-sm font-semibold text-content">
                            Products to include
                          </p>

                          {/* Selected rows */}
                          {selected.length > 0 && (
                            <ul className="mb-3 space-y-2">
                              {selected.map(({ product, seats }) => (
                                <li
                                  key={product.id}
                                  className="flex items-center gap-3"
                                >
                                  <span className="flex-1 text-sm text-content">
                                    {product.name}
                                  </span>
                                  <input
                                    type="number"
                                    min={1}
                                    value={seats}
                                    onChange={(e) =>
                                      updateSeats(
                                        product.id,
                                        parseInt(e.target.value),
                                      )
                                    }
                                    className="w-20 rounded-md border-0 px-2 py-1 text-center text-black ring-1 ring-inset ring-content-2 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm"
                                    aria-label={`Seats for ${product.name}`}
                                  />
                                  <span className="shrink-0 text-sm text-content-1">
                                    seats
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => removeProduct(product.id)}
                                    className="rounded p-0.5 text-content-2 transition-colors hover:text-content"
                                    aria-label={`Remove ${product.name}`}
                                  >
                                    <XMarkIcon className="size-4" />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Search input */}
                          <input
                            type="text"
                            placeholder="Search courses, bundles, memberships…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="block w-full rounded-md border-0 px-3 py-2 text-black ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm"
                          />

                          {/* Search results */}
                          {search.trim() && (
                            <ul className="mt-1.5 max-h-48 overflow-y-auto rounded-lg border border-content/20 bg-bkg">
                              {searchResults.length === 0 ? (
                                <li className="px-3 py-2 text-sm text-content-2">
                                  No results
                                </li>
                              ) : (
                                searchResults.map((product) => (
                                  <li key={product.id}>
                                    <button
                                      type="button"
                                      onClick={() => addProduct(product)}
                                      className="flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-secondary"
                                    >
                                      <span className="text-content">
                                        {product.name}
                                      </span>
                                      <span className="ml-2 shrink-0 text-xs capitalize text-content-2">
                                        {product.type}
                                      </span>
                                    </button>
                                  </li>
                                ))
                              )}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Privacy toggle */}
                    <Field className="flex gap-x-4 sm:col-span-2">
                      <div className="flex h-6 items-center">
                        <Switch
                          checked={agreed}
                          onChange={setAgreed}
                          className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-content-2 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-1 data-[checked]:bg-accent-1"
                        >
                          <span className="sr-only">Agree to policies</span>
                          <span
                            aria-hidden="true"
                            className="size-4 rounded-full bg-white shadow-sm ring-1 ring-content-2 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                          />
                        </Switch>
                      </div>
                      <div className="text-sm leading-6 text-content">
                        By selecting this, you agree to our{" "}
                        <a href="/policies/privacy" className="underline">
                          privacy policy
                        </a>
                        .
                      </div>
                    </Field>
                  </div>

                  {status === "error" && (
                    <p className="mt-4 text-sm text-red-400">
                      Something went wrong — please try again.
                    </p>
                  )}

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={!agreed || status === "submitting"}
                      className={`${
                        agreed && status !== "submitting"
                          ? "bg-cta text-ctatext hover:bg-accent-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
                          : "text-content-1 ring-1 ring-cta"
                      } block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm transition-colors`}
                    >
                      {status === "submitting" ? "Sending…" : "Get a Quote"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
