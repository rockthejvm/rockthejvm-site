"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Example({
  pricingPlanId,
  className,
  ariaDescribedBy,
  children,
}) {
  const [code, setCode] = useState(undefined);

  useEffect(() => {
    const affiliateCode = Cookies.get("teachable-affiliate");
    setCode(affiliateCode);
  }, []);

  return (
    <a
      className={className}
      aria-describedby={ariaDescribedBy ? ariaDescribedBy : ""}
      href={
        "https://courses.rockthejvm.com/purchase?product_id=" +
        pricingPlanId +
        (code !== undefined ? `&affcode=${code}` : "")
      }
    >
      {children}
    </a>
  );
}
