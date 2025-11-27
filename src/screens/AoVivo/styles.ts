import { StyleSheet, Platform, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    gap: 10,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },

  liveDot: {
    backgroundColor: 'red',
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  searchInput: {
    backgroundColor: '#1E1E1E',
    margin: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: '#FFF',
    fontSize: 15,
  },

  matchCard: {
    backgroundColor: '#1C1C1C',
    marginHorizontal: 15,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#2ecc71',
  },

  matchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  competitionTitle: {
    color: '#AAA',
    fontSize: 12,
    fontWeight: '500',
  },

  matchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  teamInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  teamLogo: {
    width: 26,
    height: 26,
    marginRight: 10,
    resizeMode: 'contain',
  },

  teamName: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    flexShrink: 1,
  },

  score: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    width: 30,
    textAlign: 'right',
  },

  matchStatus: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: 15,
  },

  dateText: {
    color: '#FFF',
    fontSize: 12,
    marginBottom: 2,
  },

  timeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  oddsContainer: {
    marginTop: 15,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  oddButton: {
    width: 70,
    height: 60,
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },

  oddPressed: {
    transform: [{ scale: 0.94 }],
    backgroundColor: '#333',
  },

  oddLabel: {
    color: '#888',
    fontSize: 14,
    fontWeight: 'bold',
  },

  oddValue: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 2,
  },
});
