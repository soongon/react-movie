import {Card, CardContent, CardHeader} from "@/components/ui/card"

type MovieCardProps = {
    title: string,
    posterPath: string,
}

export function MovieCard({ title, posterPath }: MovieCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="p-0">
                <img
                    src={`https://image.tmdb.org/t/p/w500${posterPath}`}
                    alt={title}
                    className="rounded-t-md object-cover w-full h-72"
                />
            </CardHeader>
            <CardContent className="text-base text-center">{title}</CardContent>
        </Card>
    );
}