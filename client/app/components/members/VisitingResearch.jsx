import { Button } from "../../components/ui/button"
export default function VisitingResearch() {
  return (
    // {/* Visiting Researchers Section */}
    <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Visiting Researchers Program</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-lg text-slate-700 mb-8">
                    We welcome visiting researchers from academic institutions and industry partners to collaborate with our
                    team on short-term projects and knowledge exchange.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button>Learn About the Program</Button>
                    <Button variant="outline">Apply as a Visiting Researcher</Button>
                </div>
            </div>
        </div>
    </section>
);
}