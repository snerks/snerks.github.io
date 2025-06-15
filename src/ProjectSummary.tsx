interface ProjectSummaryProps {
    publishedUrl: string
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
}

export function ProjectSummary(props: ProjectSummaryProps) {
    const { publishedUrl, title, description, imageUrl, technologies } = props;

    // console.log("ProjectSummary : START");

    // console.log(`import.meta.env.BASE_URL = [${import.meta.env.BASE_URL}]`);
    const baseUrlPrefix = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;
    // console.log(`baseUrlPrefix = [${baseUrlPrefix}]`);

    const imageUrlWithBase = imageUrl.startsWith("/") ? baseUrlPrefix + imageUrl : imageUrl;
    // console.log(`imageUrlWithBase = [${imageUrlWithBase}]`);

    return (<article>
        <a
            href={publishedUrl || "#"}
            className="image"
        ><img
                src={imageUrlWithBase}
                alt="" /></a>
        <div className="inner">
            <h4>{title}</h4>
            <p>
                {description}
            </p>
            <ul>
                {technologies.map((tech: string, index: number) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    </article>);
}
