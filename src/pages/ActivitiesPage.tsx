import PageHeader from '@/components/PageHeader';
import Activities from '@/components/Activities';

export default function ActivitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Aktiviteter"
        title="Seilas, trening, dugnad og regatta"
        description="Her finner du oversikt over alle kommende aktiviteter i Soon Seilforening. Påmelding og vaktlister går via Rubic – vår frivilligportal."
      />
      <Activities />
    </>
  );
}
