/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import App, { Container } from "next/app";
import React from "react";
import NextSeo from "next-seo";
import Head from "next/head";
import "antd/dist/antd.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/app.css";

import SEO from "../next-seo.config";
import { AuthProvider } from "../components/authContext";

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />
        </Head>
        <AuthProvider>
          {/* Here we call NextSeo and pass our default configuration to it  */}
          <NextSeo config={SEO} />
          <Component {...pageProps} />
        </AuthProvider>
      </Container>
    );
  }
}
