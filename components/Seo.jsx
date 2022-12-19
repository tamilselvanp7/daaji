import Head from "next/head"

function Seo({ seo }) {

  return (
    <Head>
      {seo.metaTitle && (
        <>
          <title>{seo.metaTitle}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={seo.metaTitle} />
          <meta name="twitter:title" content={seo.metaTitle} />
        </>
      )}
      {seo.metaDescription && (
        <>
          <meta name="description" content={seo.metaDescription} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta name="twitter:description" content={seo.metaDescription} />
        </>
      )}
      {seo.shareImage && (
        <>
          <meta property="og:image" content={seo.shareImage} />
          <meta name="twitter:image" content={seo.shareImage} />
          <meta name="image" content={seo.shareImage} />
        </>
      )}
      {seo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Seo;