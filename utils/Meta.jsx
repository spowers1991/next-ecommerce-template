import React from 'react';
import Head from 'next/head';

const Meta = (props) => {
  return (
    <>
      <Head>
        <title>{props.seo?.title}</title>
        <meta name="description" content={props.seo?.description} />
        <meta name="keywords" content={props.seo?.keywords?.toString()} />
        <meta name="robots" content={props.seo?.no_index} />
        <meta property="og:title" content={props.seo?.title} />
        <meta property="og:description" content={props.seo?.description} />
        <meta property="og:url" content={`https://www.stevenpowers.co.uk/${props.seo?.url}`} />
        <meta property="og:image" content={props.seo?.og_image} />
        <meta name="twitter:card" content={props.seo?.og_image} />
        <meta httpEquiv="content-language" content = "en" />
        <meta name="google-site-verification" content="xn5gDdTmBFv8xc-84JrKaLI_sR-kkS-Ve73_rY1Kico" />
      </Head>
    </>
  );
};

export default Meta;
