// TODO: Import all the modules used in the CMS
import { Cta } from 'components/Cta'
import { CtaBanner } from 'components/CtaBanner'
import { FeaturedItem } from 'components/FeaturedItem'
import { FeaturedItems } from 'components/FeaturedItems'
import { FeaturedText } from 'components/FeaturedText'
import { MainHero } from 'components/MainHero'
import { MediaModule } from 'components/MediaModule'
import { Quote } from 'components/Quote'
import { QuoteIcon } from 'components/QuoteIcon'

const componentsMap = {
  // TODO: Add all the modules to the object
  Cta,
  CtaBanner,
  FeaturedItem,
  FeaturedItems,
  FeaturedText,
  MainHero,
  MediaModule,
  Quote,
  QuoteIcon,
}

export const buildComponent = ({ _type, ...props }) => {
  if (!_type) {
    throw new Error('Object does not have a "_type" property')
  }

  const Component = componentsMap[_type]
  if (!Component) {
    throw new Error(`No component is registered for type:'${_type}`)
  }
  return <Component key={props._key} {...props} />
}
