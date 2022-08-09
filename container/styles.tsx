import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerContainer: {
    height: '10%',
    marginBottom: 20,
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: '500',
    color: '#b474e8',
  },
  rowContainer: {
    height: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  selectionContainer: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#eee',
    marginBottom: 12,
    borderRadius: 10,
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  label: {
    fontSize: 15,
    marginTop: 10,
  },
  bottomContainer: {
    height: '30%',
    width: '90%',
  },
  barcodeContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  barcodeText: {
    fontSize: 20,
    marginLeft: 10,
  },
  listHeaderContainer: {
    height: '10%',
    flexDirection: 'row',
  },
  listContainer: {
    height: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  // BARCODE CONTAINER
  centeredView: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    maxHeight: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    alignSelf: 'flex-end',
    backgroundColor: '#eee',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalBodyContainer: {
    padding: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
    padding: 10,
  },
  itemDetails: {
    width: '90%',
  },
  itemText: {
    fontSize: 14,
    width: '80%',
    marginRight: 20,
  },
})
