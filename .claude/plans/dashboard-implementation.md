# Move Claude Code Plans to Project Directory

## Overview
Move plan storage from the global `~/.claude/plans/` directory to a local `.claude/plans/` directory within the project, and commit plans to git for team collaboration.

## User Requirements
- Store plans inside the project directory (`.claude/plans/`)
- Commit plans to git for team collaboration and sharing implementation history
- Copy existing plan file to the new location

## Implementation Steps

### 1. Create .claude/plans Directory in Project
**Directory**: `.claude/plans/` in `/Users/reetamtaj/claudestarter/`

Create the directory structure to store plans locally within the project.

### 2. Copy Current Plan File
**Source**: `/Users/reetamtaj/.claude/plans/lexical-skipping-cherny.md`
**Destination**: `/Users/reetamtaj/claudestarter/.claude/plans/dashboard-implementation.md`

Copy the existing plan file to the new project-local location with a more descriptive name.

### 3. Create README for Plans Directory (Optional but Recommended)
**File**: `.claude/plans/README.md`

Document:
- Purpose of the plans directory
- That these are Claude Code implementation plans
- How team members can reference them
- Link to Claude Code documentation

### 4. Ensure Plans Are Committed to Git
**Action**: Verify `.gitignore` does NOT exclude `.claude/plans/`

Current `.gitignore` doesn't exclude `.claude/`, so plans will be committed by default. This is desired behavior for team collaboration.

### 5. Add Plans to Git
**Commands** (to be run after plan mode):
```bash
git add .claude/plans/
git commit -m "Add Claude Code implementation plans for dashboard"
```

## Critical Files to Create/Modify

1. `.claude/plans/` - NEW directory in project root
2. `.claude/plans/dashboard-implementation.md` - NEW (copy of original plan)
3. `.claude/plans/README.md` - NEW (optional documentation)

## Important Notes

### Claude Code Plan Storage Limitation
Currently, Claude Code stores plans in `~/.claude/plans/` by default. **This location is not configurable through settings.**

This implementation will:
- Create a **manual copy** of plans in the project directory
- Allow team members to reference plans via git
- Require manual copying/updating of plans after each planning session

### Future Plans
In future planning sessions, you may need to:
1. Manually copy new plan files from `~/.claude/plans/` to `.claude/plans/` in your project
2. Or create plans directly in the project directory manually

### Alternative Approach
If you want automatic project-local plan storage, you would need to:
- Submit a feature request to Claude Code to support configurable plan directories
- Or use symbolic links (symlinks) to redirect `~/.claude/plans/` to project-specific locations

## Files Created

- `.claude/plans/dashboard-implementation.md` - Original dashboard implementation plan
- `.claude/plans/README.md` - Documentation about the plans directory
