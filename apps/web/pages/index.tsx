import styles from './index.module.scss';
import { Button, Card, Input } from 'libs/ui/src';

export function Index() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.palette}>
            <Card className={styles.imageEditor}>Image editor goes here</Card>
            <div className={styles.prompts}>
              <Input label="Positive prompt" />
              <Input label="Negative prompt" />
            </div>
          </div>
          <div className={styles.panel}>
            <Button>Submit</Button>
            <></>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
