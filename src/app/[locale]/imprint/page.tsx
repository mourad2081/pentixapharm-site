export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-navy pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-heading font-bold text-white mb-8">Imprint</h1>
        <div className="text-slate-300 space-y-4">
          <p><strong className="text-white">Pentixapharm Holding AG</strong><br/>Robert-Rössle-Str. 10<br/>13125 Berlin, Germany</p>
          <p>Phone: +49 30 94892600<br/>Email: ir@pentixapharm.com<br/>Website: www.pentixapharm.com</p>
          <p><strong className="text-white">Register Court:</strong> Amtsgericht Würzburg<br/><strong className="text-white">Register Number:</strong> HRB 16020</p>
          <p><strong className="text-white">Management Board:</strong> Dr. Dirk Pleimes (CEO/CMO), Henner Kollenberg (CBO), Erik Merten (CTO)</p>
          <p><strong className="text-white">Supervisory Board Chairman:</strong> Dr. Andreas Eckert</p>
        </div>
      </div>
    </div>
  );
}
