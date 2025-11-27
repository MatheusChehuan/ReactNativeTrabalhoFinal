import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  FlatList, 
  StatusBar,
  TextInput,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AxiosError } from 'axios'; 
import { styles } from './styles';
import footballApi from '../../services/footballApi';

type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  status: string;
  time: string;
  league: string;
};

export function AoVivo() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    setLoading(true);
    setError(null); 

    try {
      const response = await footballApi.get('matches');
      
      const formattedMatches = response.data.matches
        .filter((item: any) => item.status !== 'POSTPONED') 
        .map((item: any) => ({
          id: item.id.toString(),
          homeTeam: item.homeTeam.shortName || item.homeTeam.name,
          awayTeam: item.awayTeam.shortName || item.awayTeam.name,
          homeScore: item.score.fullTime.home, 
          awayScore: item.score.fullTime.away, 
          status: item.status,
          time: new Date(item.utcDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          league: item.competition.name
        }));

      const sortedMatches = formattedMatches.sort((a, b) => {
        const isLiveA = a.status === 'IN_PLAY' || a.status === 'PAUSED';
        const isLiveB = b.status === 'IN_PLAY' || b.status === 'PAUSED';

        if (isLiveA && !isLiveB) return -1;
        if (!isLiveA && isLiveB) return 1;

        return a.time.localeCompare(b.time);
      });

      setMatches(sortedMatches);

    } catch (err) {
      const error = err as AxiosError; 
      console.error("Erro ao buscar partidas:", error);

      if (error.message === 'Network Error') {
        setError('Erro de Rede: Verifique sua conexão. Se este erro persistir, aguarde 60s (limite de API).');
      } else if (error.response) {
        const status = error.response.status;
        if (status === 429) {
          setError('Limite Excedido (429): Você fez muitas requisições. Aguarde 60 segundos e tente novamente.');
        } else if (status === 404) {
          setError('Erro 404: Endpoint da API não encontrado.');
        } else if (status === 403) {
          setError('Acesso Negado (403): Chave inválida ou acesso não autorizado.');
        } else {
          setError(`Erro HTTP ${status}: Falha ao carregar os dados.`);
        }
      } else {
        setError('Ocorreu um erro desconhecido.');
      }
      
    } finally {
      setLoading(false);
    }
  }

  const filteredMatches = matches.filter((m) =>
    m.homeTeam.toLowerCase().includes(search.toLowerCase()) ||
    m.awayTeam.toLowerCase().includes(search.toLowerCase())
  );

  const renderMatchCard = ({ item }: { item: Match }) => {
    const isLive = item.status === 'IN_PLAY' || item.status === 'PAUSED';

    return (
      <View style={styles.matchCard}>
        <View style={{flexDirection: 'row', marginBottom: 15, alignItems: 'center'}}>
          <View style={{width: 4, height: 16, backgroundColor: isLive ? '#2ecc71' : '#AAA', marginRight: 8, borderRadius: 2}} />
          <View>
            <Text style={styles.competitionTitle}>{item.league}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <View style={styles.matchRow}>
              <View style={styles.teamInfo}>
                <View style={styles.teamLogoPlaceholder}><Text>🏠</Text></View>
                <Text style={styles.teamName}>{item.homeTeam}</Text>
              </View>
              <Text style={styles.score}>{item.homeScore ?? '-'}</Text>
            </View>

            <View style={[styles.matchRow, { marginBottom: 0 }]}>
              <View style={styles.teamInfo}>
                <View style={styles.teamLogoPlaceholder}><Text>✈️</Text></View>
                <Text style={styles.teamName}>{item.awayTeam}</Text>
              </View>
              <Text style={styles.score}>{item.awayScore ?? '-'}</Text>
            </View>
          </View>

          <View style={styles.matchStatus}>
            {isLive ? (
              <View style={styles.liveBadge}>
                <Text style={styles.liveText}>AO VIVO</Text>
              </View>
            ) : (
              <Text style={styles.statusText}>{item.status === 'FINISHED' ? 'FIM' : ''}</Text>
            )}
            <Text style={[styles.statusText, isLive && {color: '#2ecc71', fontWeight: 'bold'}]}>
              {item.time}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Ao Vivo</Text>
        <View style={{backgroundColor: 'red', width: 8, height: 8, borderRadius: 4, marginLeft: 6}} />
      </View>

      <TextInput
        placeholder="Buscar time..."
        placeholderTextColor="#888"
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#2ecc71" style={{marginTop: 50}} />
      ) : error ? (
        <View style={{padding: 20, alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
          <Ionicons name="alert-circle-outline" size={40} color="#E74C3C" />
          <Text style={{color: '#E74C3C', textAlign: 'center', fontWeight: 'bold', marginTop: 10, fontSize: 16}}>
            {error}
          </Text>
          <TouchableOpacity 
            onPress={fetchMatches}
            style={{marginTop: 20, padding: 10, backgroundColor: '#2ecc71', borderRadius: 8}}
            disabled={loading} 
          >
            <Text style={{color: '#FFF', fontWeight: 'bold'}}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredMatches}
          keyExtractor={(item) => item.id}
          renderItem={renderMatchCard}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={() => (
            <Text style={{color: '#AAA', textAlign: 'center', marginTop: 20}}>
              Nenhum jogo encontrado.
            </Text>
          )}
        />
      )}
    </View>
  );
}
