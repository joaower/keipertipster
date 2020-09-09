import React from 'react';
import { makeStyles } from '@material-ui/core';
import PromotionGrid from './PromotionGrid';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  text: {
    // textAlign: 'center',
    padding: '3rem',
    textJustify: 'inter-word',
    textAlign: 'justify',
    [theme.breakpoints.up('md')]: {
      paddingRight: '10rem',
      paddingLeft: '10rem',
    },
  },
}));

const Landing = () => {
  const classes = useStyles();
  return (
    <>
      <section
        style={{
          paddingBottom: '2rem',
          paddingTop: '2rem',
          textAlign: 'center',
        }}
      >
        <h2>Mete-se aqui um textozito </h2>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam adipisci assumenda quasi, laborum odio earum
          laudantium itaque. Earum eum, similique sequi nemo corporis
          dignissimos? Repellat explicabo nam repellendus odit beatae!
          Nesciunt error nihil impedit quo ex porro provident
          temporibus possimus eaque exercitationem magnam fuga
          commodi, tempora labore, ad nisi facilis consequatur unde
          iusto adipisci! Delectus a quas quis doloribus! Eaque.
          Illum, odio ducimus adipisci cum odit similique asperiores.
          Laudantium maxime libero harum aperiam. Unde, ab cumque.
          Enim harum maiores ab quae rem corporis aspernatur,
          provident corrupti molestiae quasi sint dolor? Labore at ex,
          earum iusto consequuntur provident dolorum quos sapiente ea
          numquam animi iste qui perferendis hic quasi? Eaque
          voluptatem saepe maxime dolore possimus vero, voluptas ea
          iure nulla harum? Atque magnam, amet earum repellat
          architecto nihil odit ipsum iure voluptate doloribus, minus
          veritatis reprehenderit sit fuga modi distinctio non.
          Laborum optio architecto perferendis odit consectetur
          quisquam ea itaque totam.
        </p>
      </section>

      <PromotionGrid />
      <Footer />
    </>
  );
};

export default Landing;
