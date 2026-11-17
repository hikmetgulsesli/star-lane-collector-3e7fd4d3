# Design System: Star Lane Collector

**Stitch project:** 11914490126069314903
**Authority:** ProductSpec v2 plus browser-observed DesignInteractionGraph v2.

## Product screens
- Play page root - Star Lane Collector (TARGET_PLAY_ROOT; source 3667a686c80a4eec8951aa7cd567cd6d)

## Physical control slots
- CSLOT_ACT_START_CP_START: Start round on SURF_PLAY_ROOT
- CSLOT_ACT_MOVE_LEFT_CP_MOVE_LEFT: Move player to left lane on SURF_PLAY_ROOT
- CSLOT_ACT_MOVE_CENTER_CP_MOVE_CENTER: Move player to center lane on SURF_PLAY_ROOT
- CSLOT_ACT_MOVE_RIGHT_CP_MOVE_RIGHT: Move player to right lane on SURF_PLAY_ROOT
- CSLOT_ACT_COLLECT_CP_COLLECT: Collect the star on SURF_PLAY_ROOT
- CSLOT_ACT_OPEN_SETTINGS_CP_OPEN_SETTINGS: Open the settings overlay on SURF_PLAY_ROOT
- CSLOT_ACT_OPEN_SETTINGS_CP_MOVE_LEFT: Open the settings overlay on SURF_PLAY_ROOT
- CSLOT_ACT_OPEN_SETTINGS_CP_MOVE_CENTER: Open the settings overlay on SURF_PLAY_ROOT
- CSLOT_ACT_OPEN_SETTINGS_CP_MOVE_RIGHT: Open the settings overlay on SURF_PLAY_ROOT
- CSLOT_ACT_OPEN_SETTINGS_CP_COLLECT: Open the settings overlay on SURF_PLAY_ROOT
- CSLOT_ACT_RESUME_CP_RESUME: Resume the round from the settings overlay on SURF_SETTINGS_OVERLAY
- CSLOT_ACT_RESUME_CP_MOVE_LEFT: Resume the round from the settings overlay on SURF_PLAY_ROOT
- CSLOT_ACT_RESTART_CP_RESTART: Restart the round on SURF_PLAY_ROOT

## Implementation boundary
These files are accepted visual source, not executable application behavior. Every physical control is owned by its exact data-action and data-control-slot identity. Affected surfaces do not authorize additional controls. Routes, state transitions, persistence, reload behavior, and evidence predicates come from the sealed Product Build Packet, not from labels, inferred layout, or agent prose.

## Source policy
Only the selected response IDs in DESIGN_MANIFEST.json are canonical screens. STITCH_RENDERED_SEMANTICS_V2.json records the locked browser observation, STITCH_TARGET_CANDIDATE_SELECTION.json records exact qualification, and STITCH_RESPONSE_BINDINGS.json joins each target to the downloaded HTML and screenshot hashes. Unselected provider output is evidence only and cannot become implementation authority.
