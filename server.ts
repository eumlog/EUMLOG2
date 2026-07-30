import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    
    // Intercept root explicitly
    app.get("/", (req, res, next) => {
       res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
    });

    // React routes fallback for dev
    app.use(async (req, res, next) => {
      if (req.method === 'GET' && !req.path.includes('.') && req.path !== '/') {
        const htmlPath = path.join(process.cwd(), 'public', req.path + '.html');
        fs.access(htmlPath, fs.constants.F_OK, async (err: any) => {
          if (!err) {
            res.sendFile(htmlPath);
          } else {
            // Serve React app
            try {
              let html = await fs.promises.readFile(path.join(process.cwd(), 'app.html'), 'utf-8');
              html = await vite.transformIndexHtml(req.url, html);
              res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
            } catch (e) {
              next(e);
            }
          }
        });
      } else {
        next();
      }
    });

    // Let Vite handle other assets
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static files (don't serve index.html for / automatically)
    app.use(express.static(distPath, { index: false }));

    // Intercept root explicitly
    app.get("/", (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });

    // React routes fallback for prod
    app.use((req, res, next) => {
      if (req.method === 'GET' && !req.path.includes('.')) {
        const htmlPath = path.join(distPath, req.path + '.html');
        fs.access(htmlPath, fs.constants.F_OK, (err: any) => {
          if (!err) {
            res.sendFile(htmlPath);
          } else {
            res.sendFile(path.join(distPath, "app.html"));
          }
        });
      } else {
        next();
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
