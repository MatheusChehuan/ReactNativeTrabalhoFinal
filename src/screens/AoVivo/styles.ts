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
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
    gap: 10
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
    marginLeft: 6,
  },

  searchInput: {
    backgroundColor: '#1E1E1E',
    marginHorizontal: 15,
    marginVertical: 15,
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
    elevation: 3,
    borderWidth: 1,
    borderColor: '#333',
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

  teamLogoPlaceholder: {
    width: 24,
    height: 24,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    borderRadius: 12,
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
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#333',
    paddingLeft: 5,
  },

  liveBadge: {
    backgroundColor: 'rgba(231, 76, 60, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginBottom: 5,
  },

  liveText: {
    color: '#E74C3C',
    fontSize: 10,
    fontWeight: 'bold',
  },

  statusText: {
    color: '#AAA',
    fontSize: 12,
    textAlign: 'center',
  },
});
