import { ArrowUpRight, Calendar, Download } from "lucide-react"

import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import Tag from "../products/Tag"

export default function PublicationCard({ publication }) {
return (
    <Card className="bg-white text-zinc-800 shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
            {publication.featured && (
            <Badge className="mb-2 self-start bg-zinc-800 text-white" variant="secondary">
                Featured
            </Badge>
            )}
            <CardTitle className="text-lg font-bold leading-tight">{publication.title}</CardTitle>
            <p className="text-sm text-slate-600 mt-1">{publication.authors.join(", ")}</p>
        </CardHeader>
        <CardContent className="pb-2">
            <p className="text-sm text-slate-700 mb-3">{publication.abstract.substring(0, 150)}...</p>
            <div className="flex flex-wrap gap-2 mb-3">
            {publication.keywords.slice(0, 3).map((keyword, i) => (
                // <Badge key={i} variant="outline" className="bg-slate-50">
                // {keyword}
                // </Badge>
                <Tag key={i} name={keyword} />
            ))}
            </div>
            <div className="flex items-center text-xs text-slate-500">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{publication.year}</span>
            <span className="mx-2">•</span>
            <span>
                {publication.category === "journal"
                ? `${publication.journal}, ${publication.volume}(${publication.issue}), ${publication.pages}`
                : `${publication.conference}, ${publication.location}`}
            </span>
            </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
            <Button variant="link" className="p-0 h-auto text-primary">
            Read Full Paper <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download</span>
            </Button>
        </CardFooter>
    </Card>
);
}

