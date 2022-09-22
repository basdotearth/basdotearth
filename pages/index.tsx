import Head from 'next/head';
import type { NextPage } from 'next';

import Header from '../components/header';
import Footer from '../components/footer';
import styles from './home.module.css';
import Link from 'next/link';

type TBlogPost = {
  title: string;
  intro: string;
  link: string;
}

const examplePosts: TBlogPost[] = [{
  "title": "Phasellus sit amet erat.",
  "intro": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  "link": "https://tinypic.com/penatibus/et/magnis/dis.js?id=nunc&massa=commodo&id=placerat&nisl=praesent&venenatis=blandit&lacinia=nam&aenean=nulla&sit=integer&amet=pede&justo=justo&morbi=lacinia&ut=eget&odio=tincidunt&cras=eget&mi=tempus&pede=vel&malesuada=pede&in=morbi&imperdiet=porttitor&et=lorem"
}, {
  "title": "Praesent lectus.",
  "intro": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "link": "http://shinystat.com/integer/a/nibh/in/quis.js?phasellus=curabitur&id=in&sapien=libero&in=ut&sapien=massa&iaculis=volutpat&congue=convallis&vivamus=morbi&metus=odio&arcu=odio&adipiscing=elementum&molestie=eu&hendrerit=interdum&at=eu&vulputate=tincidunt&vitae=in&nisl=leo"
}, {
  "title": "Nunc rhoncus dui vel sem.",
  "intro": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "link": "http://wordpress.org/vestibulum/rutrum/rutrum/neque.json?congue=in&eget=est&semper=risus&rutrum=auctor&nulla=sed&nunc=tristique&purus=in&phasellus=tempus&in=sit&felis=amet&donec=sem&semper=fusce&sapien=consequat&a=nulla&libero=nisl&nam=nunc&dui=nisl&proin=duis&leo=bibendum&odio=felis&porttitor=sed&id=interdum&consequat=venenatis&in=turpis&consequat=enim&ut=blandit&nulla=mi&sed=in&accumsan=porttitor&felis=pede&ut=justo&at=eu&dolor=massa&quis=donec&odio=dapibus&consequat=duis&varius=at&integer=velit&ac=eu&leo=est&pellentesque=congue&ultrices=elementum&mattis=in&odio=hac&donec=habitasse&vitae=platea&nisi=dictumst&nam=morbi&ultrices=vestibulum&libero=velit&non=id&mattis=pretium&pulvinar=iaculis&nulla=diam&pede=erat&ullamcorper=fermentum&augue=justo&a=nec&suscipit=condimentum&nulla=neque&elit=sapien&ac=placerat&nulla=ante&sed=nulla&vel=justo&enim=aliquam&sit=quis&amet=turpis&nunc=eget&viverra=elit&dapibus=sodales&nulla=scelerisque&suscipit=mauris&ligula=sit&in=amet&lacus=eros&curabitur=suspendisse&at=accumsan&ipsum=tortor&ac=quis&tellus=turpis&semper=sed&interdum=ante&mauris=vivamus&ullamcorper=tortor&purus=duis&sit=mattis&amet=egestas&nulla=metus&quisque=aenean&arcu=fermentum&libero=donec&rutrum=ut&ac=mauris&lobortis=eget&vel=massa"
}, {
  "title": "Nulla suscipit ligula in lacus.",
  "intro": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "link": "http://printfriendly.com/vitae/consectetuer/eget/rutrum.json?sem=potenti&duis=in&aliquam=eleifend&convallis=quam&nunc=a&proin=odio"
}, {
  "title": "Fusce consequat.",
  "intro": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "link": "https://sitemeter.com/non/velit/donec/diam/neque.js?tristique=nulla&in=sed&tempus=accumsan&sit=felis&amet=ut&sem=at&fusce=dolor&consequat=quis&nulla=odio&nisl=consequat&nunc=varius&nisl=integer&duis=ac&bibendum=leo&felis=pellentesque&sed=ultrices&interdum=mattis&venenatis=odio&turpis=donec&enim=vitae&blandit=nisi&mi=nam&in=ultrices&porttitor=libero&pede=non&justo=mattis&eu=pulvinar&massa=nulla&donec=pede&dapibus=ullamcorper&duis=augue&at=a&velit=suscipit&eu=nulla&est=elit&congue=ac&elementum=nulla&in=sed&hac=vel&habitasse=enim&platea=sit&dictumst=amet&morbi=nunc&vestibulum=viverra&velit=dapibus&id=nulla&pretium=suscipit&iaculis=ligula&diam=in&erat=lacus&fermentum=curabitur&justo=at&nec=ipsum&condimentum=ac&neque=tellus&sapien=semper&placerat=interdum&ante=mauris&nulla=ullamcorper&justo=purus&aliquam=sit&quis=amet&turpis=nulla&eget=quisque&elit=arcu&sodales=libero&scelerisque=rutrum&mauris=ac&sit=lobortis&amet=vel&eros=dapibus&suspendisse=at"
}, {
  "title": "Praesent lectus.",
  "intro": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "link": "http://dailymail.co.uk/in/libero/ut/massa/volutpat/convallis/morbi.jsp?vivamus=eleifend&metus=donec&arcu=ut&adipiscing=dolor&molestie=morbi&hendrerit=vel"
}, {
  "title": "In blandit ultrices enim.",
  "intro": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "link": "https://purevolume.com/justo/lacinia/eget/tincidunt/eget.html?ultricies=id&eu=massa&nibh=id&quisque=nisl&id=venenatis&justo=lacinia&sit=aenean&amet=sit&sapien=amet&dignissim=justo&vestibulum=morbi&vestibulum=ut&ante=odio&ipsum=cras&primis=mi&in=pede&faucibus=malesuada&orci=in&luctus=imperdiet&et=et&ultrices=commodo&posuere=vulputate&cubilia=justo&curae=in&nulla=blandit&dapibus=ultrices&dolor=enim&vel=lorem&est=ipsum&donec=dolor&odio=sit&justo=amet&sollicitudin=consectetuer&ut=adipiscing&suscipit=elit&a=proin&feugiat=interdum&et=mauris&eros=non&vestibulum=ligula&ac=pellentesque&est=ultrices&lacinia=phasellus&nisi=id&venenatis=sapien&tristique=in&fusce=sapien&congue=iaculis&diam=congue&id=vivamus&ornare=metus&imperdiet=arcu&sapien=adipiscing&urna=molestie&pretium=hendrerit&nisl=at&ut=vulputate&volutpat=vitae&sapien=nisl"
}, {
  "title": "Morbi non quam nec dui luctus rutrum.",
  "intro": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "link": "https://seesaa.net/convallis/nulla.html?tempus=venenatis&vivamus=non&in=sodales&felis=sed&eu=tincidunt&sapien=eu&cursus=felis&vestibulum=fusce&proin=posuere&eu=felis&mi=sed&nulla=lacus&ac=morbi&enim=sem&in=mauris&tempor=laoreet&turpis=ut&nec=rhoncus&euismod=aliquet&scelerisque=pulvinar&quam=sed&turpis=nisl&adipiscing=nunc&lorem=rhoncus&vitae=dui&mattis=vel&nibh=sem&ligula=sed&nec=sagittis&sem=nam&duis=congue&aliquam=risus&convallis=semper&nunc=porta&proin=volutpat&at=quam&turpis=pede&a=lobortis&pede=ligula&posuere=sit&nonummy=amet&integer=eleifend&non=pede&velit=libero&donec=quis&diam=orci&neque=nullam&vestibulum=molestie&eget=nibh&vulputate=in&ut=lectus&ultrices=pellentesque&vel=at&augue=nulla&vestibulum=suspendisse&ante=potenti&ipsum=cras&primis=in&in=purus&faucibus=eu&orci=magna&luctus=vulputate&et=luctus&ultrices=cum&posuere=sociis&cubilia=natoque&curae=penatibus&donec=et&pharetra=magnis&magna=dis&vestibulum=parturient&aliquet=montes&ultrices=nascetur&erat=ridiculus&tortor=mus&sollicitudin=vivamus&mi=vestibulum&sit=sagittis&amet=sapien&lobortis=cum&sapien=sociis&sapien=natoque&non=penatibus&mi=et&integer=magnis&ac=dis&neque=parturient&duis=montes&bibendum=nascetur&morbi=ridiculus&non=mus&quam=etiam&nec=vel&dui=augue&luctus=vestibulum&rutrum=rutrum&nulla=rutrum&tellus=neque"
}, {
  "title": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",
  "intro": "Fusce consequat. Nulla nisl. Nunc nisl.",
  "link": "http://nifty.com/odio/condimentum/id/luctus/nec/molestie/sed.html?tempus=vestibulum&sit=sagittis&amet=sapien&sem=cum&fusce=sociis&consequat=natoque&nulla=penatibus&nisl=et&nunc=magnis&nisl=dis&duis=parturient&bibendum=montes&felis=nascetur&sed=ridiculus&interdum=mus&venenatis=etiam&turpis=vel&enim=augue&blandit=vestibulum&mi=rutrum&in=rutrum&porttitor=neque&pede=aenean&justo=auctor"
}, {
  "title": "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "intro": "In congue. Etiam justo. Etiam pretium iaculis justo.",
  "link": "http://usatoday.com/libero/nam/dui/proin/leo/odio.png?elit=id&proin=luctus&risus=nec&praesent=molestie&lectus=sed&vestibulum=justo&quam=pellentesque&sapien=viverra&varius=pede&ut=ac&blandit=diam&non=cras&interdum=pellentesque&in=volutpat&ante=dui&vestibulum=maecenas&ante=tristique&ipsum=est&primis=et&in=tempus&faucibus=semper&orci=est&luctus=quam&et=pharetra&ultrices=magna&posuere=ac&cubilia=consequat&curae=metus&duis=sapien&faucibus=ut&accumsan=nunc&odio=vestibulum&curabitur=ante&convallis=ipsum&duis=primis&consequat=in&dui=faucibus&nec=orci&nisi=luctus&volutpat=et&eleifend=ultrices&donec=posuere&ut=cubilia&dolor=curae&morbi=mauris&vel=viverra&lectus=diam&in=vitae&quam=quam&fringilla=suspendisse&rhoncus=potenti&mauris=nullam&enim=porttitor&leo=lacus"
}];

type TPlaygroundItem = {
  title: string;
  tags: string[];
  link: string;
};

const exampleItems: TPlaygroundItem[] = [{
  title: 'useHookHook',
  tags: ['react', 'hooks'],
  link: 'playground-id',
}, {
  title: 'WebComponent',
  tags: ['lit'],
  link: 'playground-id',
}, {
  title: 'Find Viewport-breaker',
  tags: ['vanillaJS'],
  link: 'playground-id',
}, {
  title: 'Distortion Filter',
  tags: ['react', 'svg'],
  link: 'playground-id',
}];

const Home: NextPage = () => {
  return <>
    <Head>
      <meta name="description" content="Generated by create next app" />
    </Head>
    <section className={[styles.headerTopography, 'fillSVG'].join(' ')}>
      <div className={styles.headerWrapper}>
        <Header fillBg={false} />
      </div>
    </section>
    <main className={styles.main}>
      <section>
        <h3 className={styles.contentHeading}>
          Recent Blogposts
        </h3>
        { examplePosts.map((post, index) => (
          <Link href={post.link} key={`post--${index}`}>
            <a className={styles.postCard}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postIntro}>{post.intro}</p>
              <button className={styles.postButton}>Read More</button>
            </a>
          </Link>
        )) }
      </section>
      <section>
        <div className={styles.sidebar}>
          <h3 className={styles.contentHeading}>
            Playground
          </h3>
          { exampleItems.map((item, index) => (
            <Link href={item.link} key={`item--${index}`}>
              <a className={styles.itemCard}>
                <h2 className={styles.itemTitle}>{item.title}</h2>
                <p className={styles.itemTags}>{item.tags.join(', ')}</p>
              </a>
            </Link>
          )) }
        </div>
      </section>
    </main>
    <Footer />
  </>;
};

export default Home;
