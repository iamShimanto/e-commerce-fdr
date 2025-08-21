"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function LimitSelector({ limit }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLimitChange = (e) => {
    const newLimit = e.target.value;
    const skip = searchParams.get("skip") || "0";

    const params = new URLSearchParams();
    params.set("limit", newLimit);
    params.set("skip", skip);

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <select
      defaultValue={String(limit)}
      onChange={handleLimitChange}
      className="px-3 py-2 bg-brand rounded-md hover:bg-brand/80 duration-200"
    >
      <option value="20">20</option>
      <option value="40">40</option>
      <option value="60">60</option>
    </select>
  );
}
