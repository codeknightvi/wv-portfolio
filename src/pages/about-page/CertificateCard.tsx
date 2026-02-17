import { Certificate } from "@_types";

export default function CertificateCard(certificate: Readonly<Certificate>) {
  return (
    <div className="flex p-5 border flex-col justify-center items-center">
      <h1>
        {certificate.name}{" "}
        <span className="text-sm text-tertiary">({certificate.date})</span>
      </h1>
      <div>
        {certificate.score}/{certificate.maxScroe}
      </div>
    </div>
  );
}
