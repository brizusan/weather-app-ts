import styles from "./Alerta.module.css";

type AlertaProps = {
  children: React.ReactNode;
  error: boolean;
};

export const Alerta = ({ children, error }: AlertaProps) => {
  return (
    <>
    {
      error ? <div className={styles.error}>{children}</div> : <div className={styles.success}>{children}</div>
    }
    </>
  )
};
