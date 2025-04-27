
import moduleAlias from 'module-alias';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

// In dev, alias @ to src/
// In prod, alias @ to dist/
moduleAlias.addAlias('@', path.join(__dirname, isProd ? 'dist' : ''));
