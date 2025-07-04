import React from "react";

export default function CertificationsBar() {
  return (
    <div className="w-full bg-gray-800 py-2 px-4 flex justify-center gap-4 shadow-inner">
      <img src="/assets/redhat.svg" alt="Red Hat" className="h-5 sm:h-6" />
      <img src="/assets/docker.png" alt="Docker" className="h-5 sm:h-6" />
      <img src="/assets/oracle.png" alt="Oracle" className="h-5 sm:h-6" />
      <img src="/assets/kubernetes.png" alt="Kubernetes" className="h-5 sm:h-6" />
    </div>
  );
}
