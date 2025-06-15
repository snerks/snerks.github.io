interface ProjectSummaryProps {
    publishedUrl: string
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
}

export function ProjectSummary(props: ProjectSummaryProps) {
    const { publishedUrl, title, description, imageUrl, technologies } = props;

    const publishedUrlParts = publishedUrl.split("/");
    // console.table(publishedUrlParts);
    const repoName = publishedUrlParts[publishedUrlParts.length - 2];

    console.log(`repoName : ${repoName}`);

    // console.log(`import.meta.env.BASE_URL = [${import.meta.env.BASE_URL}]`);
    const baseUrlPrefix = import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;
    // console.log(`baseUrlPrefix = [${baseUrlPrefix}]`);

    const imageType = "jpeg";
    // const imageUrlWithPerTypeFolder = imageUrl.replace("/images/", `/images/${imageType}/`)
    // const imageUrlWithType = imageUrlWithPerTypeFolder.replace(".png", `.${imageType}`);
    const imageUrlWithType = `/images/${imageType}/${repoName}.${imageType}`;

    const imageUrlWithBase = imageUrl.startsWith("/") ? baseUrlPrefix + imageUrlWithType : imageUrlWithType;
    console.log(`imageUrlWithBase =[${imageUrlWithBase}]`);

    const imageUrlToUse = imageUrl.startsWith("http") ? imageUrl : imageUrlWithBase;

    console.log(`imageUrlToUse = [${imageUrlToUse}]`);

    return (<article>
        <a
            href={publishedUrl || "#"}
            className="image"
        ><img
                src={imageUrlToUse}
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
