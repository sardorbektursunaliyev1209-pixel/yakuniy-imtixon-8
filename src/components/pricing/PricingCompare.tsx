import { Check } from "lucide-react";
import type { CompareRow } from "../../types/pricing.type";

interface PricingCompareProps {
  rows: CompareRow[];
}

const PricingCompare = ({ rows }: PricingCompareProps) => {
  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Darajalarni taqqoslash
        </h2>
        <p className="text-gray-500 mt-2">
          Har bir daraja kurslarida nima borligini batafsil ko'ring.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-5 py-4 text-gray-500 font-semibold uppercase tracking-wide text-xs">
                Imkoniyat
              </th>
              <th className="text-center px-5 py-4 text-gray-500 font-semibold uppercase tracking-wide text-xs">
                Boshlovchi
              </th>
              <th className="text-center px-5 py-4 text-blue-600 font-semibold uppercase tracking-wide text-xs">
                Mashhur
              </th>
              <th className="text-center px-5 py-4 text-gray-500 font-semibold uppercase tracking-wide text-xs">
                Kasbiy
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-5 py-3.5 text-gray-700">{row.feature}</td>
                {(["beginner", "popular", "pro"] as const).map((col) => {
                  const val = row[col];
                  return (
                    <td
                      key={col}
                      className="px-5 py-3.5 text-center text-gray-600"
                    >
                      {typeof val === "boolean" ? (
                        val ? (
                          <Check size={16} className="text-blue-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )
                      ) : (
                        val
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingCompare;
