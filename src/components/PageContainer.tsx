import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';



interface PageContainerProps {
  children: React.ReactNode;
}


export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <>
      <CssBaseline />
      <main style={{
          width: '90%',
          margin: '0 auto', 
          marginTop: '70px', 
          background:'#f5f5f5',  
        }}
      >
        { children }
      </main>
    </>
  )
}
