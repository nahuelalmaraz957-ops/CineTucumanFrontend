const Seo = ({ titulo, descripcion }) => {
  return (
    <>
      <title>{titulo}</title>
      <meta name="description" content={descripcion} />
    </>
  )
}

export default Seo
