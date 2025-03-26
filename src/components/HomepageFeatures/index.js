import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is Blif?',
    Svg: require('@site/static/img/undraw_finance_m6vw.svg').default,
    description: (
      <>
        Blif is a Telegram bot that helps users convert USDT into mobile money
        like M-Pesa or bank transfers instantly, starting in Kenya.
      </>
    ),
  },
  {
    title: 'Why Use It?',
    Svg: require('@site/static/img/undraw_security_0ubl.svg').default,
    description: (
      <>
        Fast, secure, and non-custodial. No need for an exchange. Get started now! 
        <br />
        <a href="https://t.me/yourbot" target="_blank" rel="noopener noreferrer">
          🚀 Start the Bot
        </a>
      </>
    ),
  },
  {
    title: 'How It Works',
    Svg: require('@site/static/img/undraw_thought-process_pavs.svg').default,
    description: (
      <>
        <ul>
          <li>Send USDT (Solana for lowest fees)</li>
          <li>Enter your payout number (M-Pesa, Bank)</li>
          <li>Receive cash in minutes</li>
          <li>Optional: Earn by referring others</li>
        </ul>
        <a href="/docs/how-it-works">📖 Learn More</a>
      </>
    ),
  },
  {
    title: 'Getting Started',
    Svg: require('@site/static/img/undraw_runner-start_585j.svg').default,
    description: (
      <>
        <ol>
          <li>Click Start the Bot</li>
          <li>Select USDT Network (e.g., Solana)</li>
          <li>Choose or enter how much to send</li>
          <li>Copy wallet address (or scan QR)</li>
          <li>Send USDT from any wallet (Phantom, Binance, etc.)</li>
          <li>Enter your M-Pesa or bank number</li>
          <li>Receive money 💸</li>
        </ol>
        <a href="https://t.me/yourbot">🚀 Get Started</a>
      </>
    ),
  },
  {
    title: 'Why KYC?',
    Svg: require('@site/static/img/undraw_two-factor-authentication_8tds.svg').default,
    description: (
      <>
        <ul>
          <li>To comply with local regulations and prevent fraud</li>
          <li>You'll be asked to provide:</li>
          <ul>
            <li>Your name</li>
            <li>A government-issued ID</li>
            <li>(Optional: Selfie)</li>
          </ul>
        </ul>
        <a href="/docs/kyc">👤 Learn More</a>
      </>
    ),
  },
  {
    title: 'Earn with Referrals',
    Svg: require('@site/static/img/undraw_gift-box_io08.svg').default,
    description: (
      <>
        <ul>
          <li>Get your referral link inside the bot</li>
          <li>Share with friends</li>
          <li>Earn bonuses for each user who cashes out</li>
          <li>Check leaderboard with <code>/leaderboard</code></li>
        </ul>
        <a href="/docs/referrals">💰 Start Earning</a>
      </>
    ),
  },
  {
    title: 'Share Your Success',
    Svg: require('@site/static/img/undraw_happy-announcement_23nf.svg').default,
    description: (
      <>
        <p>After every withdrawal, get a cool image like this:</p>
        <p>(Example Here)</p>
        <p>Share it with your friends to earn more.</p>
        <p>It's automatic and sent by the bot after payout!</p>
        <a href="/docs/share-your-success">📸 See How</a>
      </>
    ),
  },
  {
    title: 'Need Help?',
    Svg: require('@site/static/img/undraw_educator_6dgp.svg').default,
    description: (
      <>
        <ul>
          <li>Message support inside the bot with <code>/support</code></li>
          <li>Email: <a href="mailto:support@blif.ai">support@blif.ai</a></li>
          <li>Common Issues:</li>
          <ul>
            <li>Deposit not detected? → Ensure you sent the exact amount</li>
            <li>Payout delay? → Double-check your phone number</li>
          </ul>
        </ul>
        <a href="/docs/support">📞 Get Help</a>
      </>
    ),
  },
  {
    title: 'Safety Tips',
    Svg: require('@site/static/img/undraw_share-opinion_84l8.svg').default,
    description: (
      <>
        <ul>
          <li>Always double-check the wallet address</li>
          <li>Blif will never DM you first</li>
          <li>Never send funds outside the bot flow</li>
          <li>All payouts are processed via official mobile money APIs</li>
        </ul>
        <a href="/docs/safety">🔐 Stay Safe</a>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
