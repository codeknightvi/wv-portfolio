import { Certificate } from "@_types";

export default function CertificateCard(certificate: Certificate) {
  return (
    <div className="flex p-5 border-1 flex-col justify-center items-center">
      <h1>
        {certificate.name}{" "}
        <span className="text-sm text-gray-400">({certificate.date})</span>
      </h1>
      <div>
        {certificate.score}/{certificate.maxScroe}
      </div>
    </div>
  );
}
