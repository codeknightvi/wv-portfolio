import { Certificate } from "@_types";

export default function CertificateCard(certificate: Readonly<Certificate>) {
  return (
    <div className="flex flex-col items-center justify-center border p-5 min-h-[160px]">
      <h1>
        {certificate.name} <span className="text-tertiary text-sm">({certificate.date})</span>
      </h1>
      <div>
        {certificate.score}/{certificate.maxScore}
      </div>
    </div>
  );
}
