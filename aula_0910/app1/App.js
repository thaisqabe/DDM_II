import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>Louis Tomlinson</Text>

      <ScrollView style={styles.src}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.texto}>
          Louis Tomlinson é um cantor e compositor britânico, nascido em 24 de dezembro de 1991, em Doncaster, na Inglaterra. Ele ficou conhecido mundialmente após participar do programa The X Factor, em 2010, quando passou a integrar a boyband One Direction, ao lado de Harry Styles, Niall Horan, Liam Payne e Zayn Malik.

          Durante sua trajetória com o One Direction, Louis conquistou milhões de fãs ao redor do mundo. O grupo lançou músicas de grande sucesso, como What Makes You Beautiful, Story of My Life, Night Changes e Drag Me Down. A banda se tornou um dos maiores fenômenos da música pop dos anos 2010, realizando turnês internacionais e lançando diversos álbuns.

          Após o hiato do One Direction, anunciado em 2016, Louis começou a desenvolver sua carreira solo. Em 2017, lançou a música Back to You, em parceria com Bebe Rexha e Digital Farm Animals. A canção marcou uma nova etapa de sua trajetória musical e apresentou seu trabalho individual ao público.

          Em 2020, o cantor lançou seu primeiro álbum solo, Walls. O disco apresenta influências do rock e do pop, com letras que abordam sentimentos, relacionamentos e experiências pessoais. Entre as músicas mais conhecidas do álbum estão Two of Us, Kill My Mind e Walls.

          Em 2022, Louis lançou Faith in the Future, seu segundo álbum de estúdio. O trabalho apresenta uma sonoridade mais voltada ao rock alternativo e inclui faixas como Bigger Than Me, Out of My System e Silver Tongues. O álbum também reforçou sua identidade musical como artista solo.

          Além da música, Louis é conhecido pela proximidade com seus fãs e pela maneira como compartilha suas experiências pessoais em entrevistas e apresentações. Sua trajetória demonstra a transição de integrante de uma boyband mundialmente famosa para um artista com estilo e projetos próprios.

          Em 2023, o cantor lançou o documentário All of Those Voices, que mostra momentos de sua carreira solo, os bastidores de suas apresentações e os desafios enfrentados ao longo de sua jornada. O projeto oferece aos fãs uma visão mais pessoal de sua vida profissional.

          Louis também realizou turnês internacionais, apresentando suas músicas para públicos de diferentes países. Durante esses shows, ele combina canções de sua carreira solo com momentos que celebram sua história musical, criando uma conexão especial com seus fãs.

          Sua influência musical reúne elementos do pop, do rock e do indie rock. Ao longo dos anos, Louis demonstrou interesse em explorar diferentes sonoridades e desenvolver composições que reflitam suas experiências e referências musicais.

          Atualmente, Louis Tomlinson continua sua trajetória como cantor e compositor, mantendo uma base de fãs internacional. Sua carreira representa uma jornada de crescimento artístico, marcada por mudanças, novos projetos e a busca por uma identidade musical própria.
        </Text>
      </ScrollView>


      <View style={styles.lista}>
        <Text style={styles.tituloLista}>♫ Músicas favoritas</Text>

        <Text style={styles.itemLista}>01. Two of Us</Text>
        <Text style={styles.itemLista}>02. Walls</Text>
        <Text style={styles.itemLista}>03. Bigger Than Me</Text>
        <Text style={styles.itemLista}>04. Silver Tongues</Text>
        <Text style={styles.itemLista}>05. Kill My Mind</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui"
      />

      <Button
        color="#ff0946"
        title="Envie uma mensagem"
        onPress={() => { }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: '3%'
  },

  src: {
    flex: 1,
    backgroundColor: '#b92248',
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    margin: 10,
    maxHeight: '50%'
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
    paddingHorizontal: 10,
  },

  texto: {
    color: '#fff',
    fontSize: '14px'
  },

  lista: {
    backgroundColor: '#1c1c1c',
    padding: 20,
    borderRadius: 15,
    margin: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#b92248',
  },

  tituloLista: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  itemLista: {
    color: '#f2b6c6',
    fontSize: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#393939',
  },
});
