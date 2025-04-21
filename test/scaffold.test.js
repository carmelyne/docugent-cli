import { describe, it, beforeAll, expect } from 'vitest';
import fs from 'fs-extra';
import path from 'path';
import os from 'os';
import { mkdtempSync } from 'fs';
import { scaffoldApp } from '../lib/core/scaffoldApp.js';
import { folderGroups } from '../lib/config/scaffold-groups.js'; // 🔁 We'll extract this next

describe('dokugent scaffold (core)', () => {
  const testDir = fs.mkdtempSync(path.join(os.tmpdir(), 'dokugent-test-'));

  // Flatten the folderGroups.core into a flat list of scaffolded paths
  const expectedFiles = [
    'ux/flows.md',
    'ux/personas.md',
    'db-schema/models.md',
    'db-schema/relationships.md',
    'db-schema/seed-data.md',
    'db-schema/migrations.md',
    'mvc/controllers.md',
    'mvc/models.md',
    'mvc/views.md',
    'design-system/tokens.md',
    'design-system/components.md',
    'changelog/v0.1.md',
  ];

  let originalCwd;

  beforeAll(() => {
    originalCwd = process.cwd();
    process.chdir(testDir);
    scaffoldApp('core', { withChecklists: true });
    process.chdir(originalCwd);
  });

  expectedFiles.forEach(relativePath => {
    it(`should create .dokugent/${relativePath}`, () => {
      const fullPath = path.join(testDir, '.dokugent', relativePath);
      const exists = fs.existsSync(fullPath);

      // Log the actual file existence check
      console.log(`[test] Checked: .dokugent/${relativePath} — ${exists ? '✅ Found' : '❌ Missing'}`);

      expect(exists).toBe(true);
    });
  });

});