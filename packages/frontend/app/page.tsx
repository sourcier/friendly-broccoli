import config from '../config';
import { Hero } from '../components/server/hero';

export default function Page() {
  const { hero } = config.homepage;
  return (
    <Hero title={hero.title} subTitle={hero.subTitle} image={hero.image} />
  );
}
