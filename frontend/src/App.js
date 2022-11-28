
import './App.css';
import LayoutComp from './features/layout'
import { IntlProvider } from 'react-intl';
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";

function App() {
  const locale = LOCALES.ENGLISH;
  return (
    <IntlProvider locale={navigator.language} messages={messages[locale]} defaultLocale={LOCALES.ENGLISH}>
       <div className="App">
      <LayoutComp></LayoutComp>
    </div>
    </IntlProvider>
   
  );
}

export default App;
