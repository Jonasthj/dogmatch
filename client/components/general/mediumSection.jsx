export function MediumSectionStyleable(content, cssClassName) {
    return (
        <section className={`section is-medium ${cssClassName}`}>
            {content}
        </section>
    );
}

export function MediumSection(content) {
    return (
        <section className={`section is-medium`}>
            {content}
        </section>
    );
}