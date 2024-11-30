import { z } from 'zod';


const tableStyle = {
  border: '0',
  cellPadding: '0',
  cellSpacing: '0',
  width: '100%'
};

/**
 * A banner component. It adapts to the screen's width
 * @component
 * @param {string} [props.aspectRatio='50'] - The aspect ratio of the banner (important for responsive emails, needs to be in text format).
 * @param {boolean} [props.hasBorderRadius=false] - Whether the banner should have a border radius.
 * @param {string|Object} props.src - The source of the image. Can be a string representing the image URL, an object containing URLs for different environments (development, production, sandbox), or an object with keys 'en-US' and 'pt-BR' each containing an object with URLs for different environments.
 * @param {Object} [props.style] - Additional styles for the banner.
 * @param {Object} props.props - Additional props for the banner.
 *
 * @returns {JSX.Element} The BaseBanner component.
 */
const BaseBanner = ({ aspectRatio = '50.00', hasBorderRadius = false, src, style, ...props }) => {
  const bannerStyle = {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: hasBorderRadius && '8px',
    margin: 0,
    padding: 0,
    paddingBottom: `${aspectRatio}%`
  };

  // if just 1 URL
  if (typeof src === 'string') {
    return (
      <table style={tableStyle}>
        <tr>
          <td style={{ ...bannerStyle, backgroundImage: `url(${src}` }}>
            <img />
          </td>
        </tr>
      </table>
    );
  }

  const renderTable = src => (
    <table style={tableStyle}>
      <tr>
        <td style={{ ...bannerStyle, ...style, backgroundImage: src.sandbox }} {...props} />
      </tr>
    </table>

  // const renderTable = src => (
  //   <table style={tableStyle}>
  //     <tr>
  //       <Liquid code="{% if customerEnvironment == 'sandbox' %}" />
  //       <td style={{ ...bannerStyle, ...style, backgroundImage: `url(${src.sandbox}` }} {...props} />

  //       <Liquid code="{% elsif customerEnvironment == 'development' %}" />
  //       <td style={{ ...bannerStyle, ...style, backgroundImage: `url(${src.development}` }} {...props} />

  //       <Liquid code="{% else %}" />
  //       <td style={{ ...bannerStyle, ...style, backgroundImage: `url(${src.production}` }} {...props} />

  //       <Liquid code="{% endif %}" />
  //     </tr>
  //   </table>
  );

  // if ('en-US' in src) {
  //   return (
  //     <>
  //       <Liquid code={`{% if locale == 'pt-BR' %}`} />
  //       {renderTable(src['pt-BR'])}
  //       <Liquid code="{% else %}" />
  //       {renderTable(src['en-US'])}
  //       <Liquid code="{% endif %}" />
  //     </>
  //   );
  // }

  return renderTable(src);
};

const imageSourceSchema = z.object({
  development: z.string().optional().nullable(),
  production: z.string().optional().nullable(),
  sandbox: z.string().optional().nullable(),
});

// Zod schema for BaseBanner propTypes
const BaseBannerSchema = z.object({
  aspectRatio: z.union([z.number(), z.string()]).optional(),
  hasBorderRadius: z.boolean().optional().default(false),
  src: z.union([
    z.string(),
    imageSourceSchema,
    z.object({
      'en-US': imageSourceSchema,
      'pt-BR': imageSourceSchema,
    }),
  ]),
  style: z.record(z.string(), z.any()).optional(), // For arbitrary object
  props: z.any(),
});
export default BaseBanner;
