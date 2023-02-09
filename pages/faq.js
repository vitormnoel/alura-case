import FAQScreen from '../src/screens/FAQ/index';

export default FAQScreen; 

export const getStaticProps = async () => {
    console.log('Em modo DEV, sempre roda! A cada acesso')
    console.log('Roda SOMENTE em build time')
    
     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
     
     const faq = []

    console.log(faq)
    return {
      props: {
        faq
      },
    };
}  