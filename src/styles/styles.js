import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    app: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    searchBarContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& span': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE5FF',
        height: '2.5rem',
        padding: '0 1rem',
      }
    },
    searchInput: { 
      width: '90%',
      height: '2.5rem',
      margin: '1rem 0',
      padding: ' 0.5rem 1rem',
      fontSize : "1rem",
      color : "blue",
      backgroundColor: '#EEE5FF',
      border: 'none',
      outline: 'none',
    },
    mainContainer: {
      width: '100%',
    },
    albumHeading: {
      width: '90%',
      margin: '1rem auto'
    },
    resContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '90%',
      margin: '1rem auto'
    },
    resLeft: {
      display: 'flex'
    },
    resLeftPhotoContainer: {
      display: 'flex',
      '& img': {
        height: '3.2rem',
        width: '3.2rem',
      }
    },
    resLeftDetailsContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: '0.5rem',
    },
    resRight: {
      display: 'flex',
      flexDirection: 'column'
    },
  });