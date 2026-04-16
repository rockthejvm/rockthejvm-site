const renderIndicator = (val: string) => {
  switch (val) {
    case "yes":
      return (
        <span class="inline-flex items-center justify-center text-green-300">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
            aria-label="Yes"
          >
            <path
              fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      );
    case "no":
      return (
        <span class="inline-flex items-center justify-center text-red-300">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
            aria-label="No"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </span>
      );
    default:
      return (
        <span class="inline-flex items-center justify-center text-yellow-300" aria-label="Partial">
          {val}
          {/* <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
          </svg> */}
        </span>
      );
  }
}
