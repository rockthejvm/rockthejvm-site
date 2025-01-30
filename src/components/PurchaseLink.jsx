"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Example({
  pricingPlanId,
  className,
  children,
  ariaDescribedBy = "",
}) {
  const [cookies, setCookies] = useState(undefined);

  useEffect(() => {
    const cookiesAccepted = Cookies.get("cookies-accepted");
    const affiliateCode = Cookies.get("teachable-affiliate");
    setCookies([cookiesAccepted, affiliateCode]);
  }, []);

  return (
    <a
      className={className}
      aria-describedby={ariaDescribedBy}
      href={
        "https://courses.rockthejvm.com/purchase?product_id=" +
        pricingPlanId +
        (cookies !== undefined &&
        cookies[0] === "true" &&
        cookies[1] !== undefined
          ? `&affcode=${cookies[1]}`
          : "")
      }
    >
      {children}
    </a>
  );
}
