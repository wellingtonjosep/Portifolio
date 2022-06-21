
function Information ({ className, p,img,  technologie }) {
    return (
        <article className={className}>
            <img className={img} src={technologie.url} alt={technologie.name} />
            <p className={p}>{technologie.name}</p>
        </article>
    )
}

export default Information