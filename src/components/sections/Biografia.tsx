import { Section } from './Section';

export function Biografia() {
  return (
    <Section id="biografia">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-base">
        <p>
          Askbayns é um projeto de comédia musical, que tem por sua base o humor inteligente e subtil, referenciando muito a cultura local do Vale do Ave e a Portugalidade em geral nas suas letras. A banda utiliza a sua vasta experiência musical para transacionar sem esforço por vários géneros musicais, tendo os seus trabalhos as mais variadas temáticas.</p>
          <p>
            Durante a pandemia, foi composto e produzido o primeiro álbum da banda, Bayns City. Este álbum conceptual inspira-se numa rádio fictícia, tal como aquelas do videojogo Vice City. Conta com sonoridades reminiscentes à década de 80, com ritmos dançantes, melodias vibrantes e letras mirabolantes. Podemos ouvir o locutor Eusébio Mantorras contar a história das altercações da banda com o seu empresário Black Bimbas e também, vários anúncios e jingles alusivos à temática da cidade fictícia, Bayns City.
          </p>
          <p>
            Entre 2020 e 2022 foram lançados 3 temas com videoclipe, Festão, Dá-te Asias e Sopa Não. O álbum completo foi disponibilizado em todas as plataformas de streaming no ano de 2023.
          </p>
          <p>
            No início de 2024 é lançado um Live Set do álbum Bayns City no Cru - Cave Cultural.
          </p>
          <p>
            No final de 2024 vemos um lançamento duplo por parte da banda com Arranca Troços, EP baseado numa sonoridade punk, reminiscente aos primeiros anos de Askbayns. Este EP sai juntamente com o videoclipe para o tema Ambulância Cheia de Speed. Posteriormente, é lançado o single Bacalhau, com a participação de Homem do Robe, que antecede Sortido Musical, o segundo trabalho de estúdio da banda. Sortido Musical apresenta-se como um álbum de músicas do mundo, com os mais variados ritmos e sonoridades, prometendo muito e entregando ainda mais.
          </p>
          <p>
            O álbum encontra-se previsto para o primeiro trimestre de 2025. Com vários concertos dados só há uma conclusão a tirar. Ninguém consegue escapar ao festão que é um concerto de Askbayns. Um projeto que junta todos num ambiente de alegria e boa disposição. No final, nunca ninguém quer ir embora.
          </p>
          <p>
            O álbum encontra-se previsto para o primeiro trimestre de 2025. Com vários concertos dados só há uma conclusão a tirar. Ninguém consegueescapar ao festão que é um concerto de Askbayns. Um projeto que junta todos num ambiente de alegria e boa disposição. No final, nunca ninguém quer ir embora.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://www.askbayns.pt/content/images/banda/honorato_bat.jpg"
            alt="Honorato Bat"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://www.askbayns.pt/content/images/banda/g-son_shack.jpg"
            alt="G-Son Shack"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://www.askbayns.pt/content/images/banda/johnny_owl.jpg"
            alt="Johnny Owl"
            className="w-full h-64 object-cover"
          />
          <img
            src="https://www.askbayns.pt/content/images/banda/liam_rocket.jpg"
            alt="Liam Rocket"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </Section>
  );
}
