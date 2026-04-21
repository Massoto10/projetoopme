"use client";

import { CollapsibleSection } from "@/components/CollapsibleSection";
import {
  PacoteHospitaisBuscaCnpj,
  type PacoteHospitalBuscaItem,
} from "@/components/PacoteHospitaisBuscaCnpj";

type Props = {
  items: PacoteHospitalBuscaItem[];
  emptyListMessage: string;
};

export function PacoteColaboradorFornecedoresPanel({
  items,
  emptyListMessage,
}: Props) {
  return (
    <CollapsibleSection
      title="Hospitais / fornecedores e observações"
      subtitle="Expanda para buscar por CNPJ e abrir cada fornecedor para ver a observação."
    >
      <PacoteHospitaisBuscaCnpj
        items={items}
        emptyListMessage={emptyListMessage}
      />
    </CollapsibleSection>
  );
}
