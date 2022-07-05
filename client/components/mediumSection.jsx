export function MediumSection(content, cssClassName) {
    return (
        <section className={`section is-medium ${cssClassName}`}>
            {content}
        </section>
    );
}