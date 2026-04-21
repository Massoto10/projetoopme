"use client";

import { AnexosPanel } from "@/components/AnexosPanel";
import { CollapsibleSection } from "@/components/CollapsibleSection";

type Anexo = {
  id: string;
  nomeOriginal: string;
  tamanhoBytes: number;
  createdAt: string;
};

type Props = {
  pacoteId: string;
  anexos: Anexo[];
  canManage: boolean;
};

export function PacoteAnexosCollapsible({
  pacoteId,
  anexos,
  canManage,
}: Props) {
  return (
    <CollapsibleSection
      title="Anexos PDF"
      subtitle={
        canManage
          ? "Envie ou remova arquivos deste pacote."
          : "Documentos anexados a este pacote (somente leitura)."
      }
    >
      <AnexosPanel
        pacoteId={pacoteId}
        anexos={anexos}
        canManage={canManage}
        showHeading={false}
      />
    </CollapsibleSection>
  );
}
