/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const sizes = {
  sm: '544px',
  md: '768px',
  lg: '1012px',
  xl: '1280px',
};

const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 2rem;

  > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1012px) {
    padding: 0 1rem;
  }
`;

const Container = styled.div`
  width: 100%;

  @media screen and (min-width: 1012px) {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const MainTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.5;
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  list-style: none;
  color: hsla(45, 8%, 20%, 1);
  height: 30px;
  padding: 0 10px;

  a {
    color: currentColor;
    text-decoration: none;
  }
`;

const MainContent = styled.main`
  padding: 0 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;

  @media screen and (min-width: 1012px) {
    flex-wrap: nowrap;
    padding: 4.5rem 0;
  }

  .dashboard__illustration {
    margin: -10% auto;
  }

  &.dashboard {
    position: relative;
    flex-wrap: wrap;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #f9f5f1;
      margin: 0 -2rem;
      z-index: -1;
    }
  }
`;

const SectionH2 = styled.h2`
  width: 100%;
  font-size: 1.875rem;
  margin-top: 0;

  @media screen and (min-width: 1012px) {
    font-size: 2rem;
  }
`;

const SectionH2Default = styled.h2`
  font-size: 1.875rem;
  margin-top: 0;
  width: 100%;

  @media screen and (min-width: 1012px) {
    font-size: 2rem;
  }
`;

const SectionH2Big = styled(SectionH2)`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.5;

  @media screen and (min-width: 1012px) {
    width: 100%;
  }
`;

const SectionHero = styled(Section)`
  h2 {
    font-size: 2.5rem;
    line-height: 1.5;
  }

  .hero__illustration {
    @media screen and (min-width: 1012px) {
      width: 40%;
    }
  }
`;

const SectionHeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 1012px) {
    width: 60%;
  }
`;

const SectionIllustration = styled.div`
  display: none;

  @media screen and (min-width: 1012px) {
    display: block;
  }
`;

const SectionIllustrationFull = styled(SectionIllustration)`
  display: block;
  width: 100%;
  max-width: 1280px;

  > * {
    min-width: 100%;
  }

  img {
    min-width: 100%;
    min-height: auto;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const SectionProducts = styled(Section)`
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
  }
`;

const ProductsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;

const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1.5rem 0;
  width: 100%;

  @media screen and (min-width: 640px) {
    max-width: calc(100% / 2 - 32px);

    &:nth-child(even) {
      margin-left: 32px;
    }
  }

  @media screen and (min-width: 912px) {
    max-width: 272px;

    &:nth-child(2) {
      margin-right: 32px;
    }
  }
  @media screen and (min-width: 944px) {
    &:nth-child(2) {
      margin-right: 0;
    }
    &:nth-child(3) {
      margin-left: 32px;
    }
    &:last-child {
      margin-left: 0;
    }
  }
  @media screen and (min-width: 1216px) {
    &:nth-child(3) {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    max-width: calc(100% / 4 - 32px);
  }

  .product__title {
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 1.46;
    margin: 0;
    padding: 1.5rem 0 0.875rem;
  }

  .product__desc {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25;
    margin: 0;
    padding-bottom: 0.875rem;
    min-height: 94px;
  }

  .product__illustration {
    /*background-color: hsla(0, 0%, 92%, 1);*/
    min-height: 282px;
    text-align: center;
    position: relative;

    &::before {
      content: '';
      background-color: #f9f5f1;
      border-top-right-radius: 3rem;
      border-bottom-left-radius: 3rem;
      width: 80%;
      height: 80%;
      position: absolute;
      left: 0;
      top: 5%;
    }
  }
`;

const BurgerMenuToggle = styled.button`
  display: flex;
  color: black;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;
  background: none;
  border: 0;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  border-radius: 4px;
  min-width: 80px;
`;

const PrimaryButton = styled(Button)`
  color: white;
  background-color: hsla(45, 8%, 20%, 1);
`;

const LinkCustom = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  border-radius: 4px;
  min-width: 80px;
  color: white;
  background-color: hsla(45, 8%, 20%, 1);
  text-decoration: none;
`;

const LinkDisabled = styled(LinkCustom)`
  background-color: hsla(0, 0%, 92%, 1);
  color: hsla(45, 8%, 20%, 1);
  pointer-events: none;
`;

const Footer = styled.footer`
  display: flex;
  padding: 4rem 1rem 2rem;

  > div {
    border-top: 1px solid hsla(45, 8%, 20%, 1);
    display: flex;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.45;
    width: initial;
    margin-top: 1rem;
  }
`;

const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 1rem 0 0;
`;

export default function Home(): JSX.Element {
  const links: string[] = ['Products', 'Pricing', 'Contact', 'Signin', 'Signup'];

  return (
    <>
      <Head>
        <title>Landing page of livefeed</title>
      </Head>
      <Header>
        <Container>
          <MainTitle>Livefeed</MainTitle>
          <BurgerMenuToggle>Menu</BurgerMenuToggle>
          <Nav>
            <Menu className="menu menu--right">
              {links.map((link, index) => (
                <MenuItem key={index} className="menu__link link">
                  <Link href="#">
                    <a>{link}</a>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Nav>
        </Container>
      </Header>
      <MainContent>
        <SectionHero className="section section__hero hero">
          <SectionHeroLeft>
            <SectionH2>
              Publish real-time updates and breaking news from your desktop or mobile device.
            </SectionH2>
            <Link href="#">
              <LinkCustom>Get started</LinkCustom>
            </Link>
          </SectionHeroLeft>
          <SectionIllustration className="hero__illustration">
            <Image
              src="/img/illustrations/hiring_people_2.svg"
              layout="responsive"
              alt=""
              width="780"
              height="640"
            />
          </SectionIllustration>
        </SectionHero>
        <Section className="section section__dashboard dashboard">
          <SectionH2Default>An all-in-one dashboard for your real-time contents</SectionH2Default>
          <SectionIllustrationFull className="dashboard__illustration">
            <Image
              src="/img/illustrations/dashboard.svg"
              layout="responsive"
              alt=""
              width="320"
              height="320"
            />
          </SectionIllustrationFull>
        </Section>
        <SectionProducts className="section section__products products">
          <SectionH2Big>Unleash the potential of Real-Time</SectionH2Big>
          <ProductsList className="products__list">
            <ProductItem className="product livereporting">
              <div className="product__illustration">
                <Image src="/img/illustrations/blog.svg" alt="" width="282" height="282" />
              </div>
              <h3 className="product__title">Live Reporting</h3>
              <p className="product__desc">
                The live blogging platform. Delivered the real-time contents at any scale. Easy &
                simple setup.
              </p>
              <Link href="#">
                <LinkCustom>Learn more</LinkCustom>
              </Link>
            </ProductItem>
            <ProductItem className="product livereporting">
              <div className="product__illustration">
                <Image src="/img/illustrations/testimonial.svg" alt="" width="282" height="282" />
              </div>
              <h3 className="product__title">Live Chat</h3>
              <p className="product__desc">
                Engage audience with livechat. Add text, voice and picture chat to your community
                and engage your customers in real time.
              </p>
              <Link href="#">
                <LinkDisabled href="#">Coming soon</LinkDisabled>
              </Link>{' '}
            </ProductItem>
            <ProductItem className="product livereporting">
              <div className="product__illustration">
                <Image src="/img/illustrations/ideation.svg" alt="" width="282" height="282" />
              </div>
              <h3 className="product__title">Live Streaming</h3>
              <p className="product__desc">
                Stream to your website, your mobile apps, social destinations, Smart TV Apps,
              </p>
              <Link href="#">
                <LinkDisabled href="#">Coming soon</LinkDisabled>
              </Link>{' '}
            </ProductItem>
            <ProductItem className="product livereporting">
              <div className="product__illustration">
                <Image src="/img/illustrations/newsletter.svg" alt="" width="282" height="282" />
              </div>
              <h3 className="product__title">Engage</h3>
              <p className="product__desc">
                Grow your email list, get more leads and increase sales.
              </p>
              <Link href="#">
                <LinkDisabled href="#">Coming soon</LinkDisabled>
              </Link>
            </ProductItem>
          </ProductsList>
        </SectionProducts>
      </MainContent>
      <Footer>
        <Container>
          <h2>Livefeed</h2>
          <Nav>
            <FooterMenu className="menu">
              {links.map((link, index) => (
                <MenuItem key={index} className="menu__link">
                  <Link href="#">
                    <a>{link}</a>
                  </Link>
                </MenuItem>
              ))}
            </FooterMenu>
          </Nav>
        </Container>
      </Footer>
    </>
  );
}
