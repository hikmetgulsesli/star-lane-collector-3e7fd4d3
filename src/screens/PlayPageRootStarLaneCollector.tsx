// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page root - Star Lane Collector
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageRootStarLaneCollectorActionId = "resume-round-1" | "start-round-2" | "collect-star-3" | "restart-round-4" | "move-left-5" | "move-center-6" | "move-right-7" | "open-settings-collect-deck-8" | "open-settings-center-slot-9" | "open-settings-left-slot-10" | "open-settings-right-slot-11" | "open-settings-12" | "resume-left-deck-slot-13";

export interface PlayPageRootStarLaneCollectorProps {
  actions?: {
    "resume-round-1"?: () => void;
    "start-round-2"?: () => void;
    "collect-star-3"?: () => void;
    "restart-round-4"?: () => void;
    "move-left-5"?: () => void;
    "move-center-6"?: () => void;
    "move-right-7"?: () => void;
    "open-settings-collect-deck-8"?: () => void;
    "open-settings-center-slot-9"?: () => void;
    "open-settings-left-slot-10"?: () => void;
    "open-settings-right-slot-11"?: () => void;
    "open-settings-12"?: () => void;
    "resume-left-deck-slot-13"?: () => void;
  };

}

export type PlayPageRootStarLaneCollectorActionCallbacks = NonNullable<PlayPageRootStarLaneCollectorProps["actions"]>;

export function PlayPageRootStarLaneCollector({ actions }: PlayPageRootStarLaneCollectorProps) {
  return (
    <>
      {/* Root Surface */}
        <div data-surface-id="SURF_PLAY_ROOT" className="min-h-screen w-full flex flex-col justify-between bg-radial from-space-900 via-space-950 to-black p-4 md:p-8" data-setfarm-element-ref="E000001" data-observable-refs="OBS_ACT_COLLECT_OBS_COLLECT_ROUTE OBS_ACT_MOVE_CENTER_OBS_CENTER_ROUTE OBS_ACT_MOVE_LEFT_OBS_LEFT_ROUTE OBS_ACT_MOVE_RIGHT_OBS_RIGHT_ROUTE OBS_ACT_OPEN_SETTINGS_OBS_SETTINGS_ROUTE OBS_ACT_RESTART_OBS_RESTART_ROUTE OBS_ACT_RESUME_OBS_RESUME_ROUTE OBS_ACT_START_OBS_START_ROUTE">
          
          {/* Top HUD Bar */}
          <header className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 border-b border-space-700/60 pb-6 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyanaccent-500 to-staryellow-400 flex items-center justify-center shadow-lg shadow-cyanaccent-500/20 text-space-950 font-black text-xl">
                *
              </div>
              <div>
                <h1 className="text-xl font-extrabold tracking-wider text-white uppercase">Star Lane Collector</h1>
                <p className="text-xs text-slate-400">Desktop Edition • /play</p>
              </div>
            </div>
      
            {/* Displays HUD Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
              {/* Score Display */}
              <div data-surface-id="SURF_SCORE_DISPLAY" className="bg-space-900/90 border border-space-700/80 rounded-xl px-4 py-2.5 shadow-inner flex flex-col items-center justify-center min-w-[110px]" data-setfarm-element-ref="E000002" data-observable-refs="OBS_ACT_COLLECT_OBS_COLLECT_SCORE OBS_ACT_RESTART_OBS_RESTART_SCORE OBS_ACT_RESUME_OBS_RESUME_SCORE_PRESERVED OBS_ACT_START_OBS_START_SCORE_KEPT">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Current</span>
                <span className="text-lg font-black text-white">Score: 0</span>
              </div>
      
              {/* High Score Display */}
              <div data-surface-id="SURF_HIGH_SCORE_DISPLAY" className="bg-space-900/90 border border-staryellow-500/30 rounded-xl px-4 py-2.5 shadow-inner flex flex-col items-center justify-center min-w-[120px]" data-setfarm-element-ref="E000003" data-observable-refs="OBS_ACT_COLLECT_OBS_COLLECT_HIGH_SCORE OBS_ACT_RESTART_OBS_RESTART_HIGH_SCORE_PRESERVED OBS_ACT_RESUME_OBS_RESUME_HIGH_SCORE_PRESERVED">
                <span className="text-[10px] uppercase font-bold tracking-widest text-staryellow-400">Best</span>
                <span className="text-lg font-black text-staryellow-400">High score: 0</span>
              </div>
      
              {/* Phase Display */}
              <div data-surface-id="SURF_PHASE_DISPLAY" className="bg-space-900/90 border border-cyanaccent-500/30 rounded-xl px-4 py-2.5 shadow-inner flex flex-col items-center justify-center min-w-[110px]" data-setfarm-element-ref="E000004" data-observable-refs="OBS_ACT_OPEN_SETTINGS_OBS_SETTINGS_PHASE OBS_ACT_RESTART_OBS_RESTART_PHASE OBS_ACT_RESUME_OBS_RESUME_PHASE OBS_ACT_START_OBS_START_PHASE">
                <span className="text-[10px] uppercase font-bold tracking-widest text-cyanaccent-400">Status</span>
                <span className="text-lg font-black text-cyanaccent-400">Ready</span>
              </div>
      
              {/* Lane Display */}
              <div data-surface-id="SURF_LANE_DISPLAY" className="bg-space-900/90 border border-space-700/80 rounded-xl px-4 py-2.5 shadow-inner flex flex-col items-center justify-center min-w-[110px]" data-setfarm-element-ref="E000005" data-observable-refs="OBS_ACT_MOVE_CENTER_OBS_CENTER_LANE OBS_ACT_MOVE_LEFT_OBS_LEFT_LANE OBS_ACT_MOVE_RIGHT_OBS_RIGHT_LANE OBS_ACT_RESTART_OBS_RESTART_LANE OBS_ACT_RESUME_OBS_RESUME_LANE_PRESERVED">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Position</span>
                <span className="text-lg font-black text-purple-300">Lane 0</span>
              </div>
            </div>
          </header>
      
          {/* Center Section: Game Scene + Settings Overlay */}
          <main className="w-full max-w-6xl mx-auto flex-1 flex flex-col items-center justify-center relative">
            
            {/* Status Message Display */}
            <div data-surface-id="SURF_MESSAGE_DISPLAY" className="w-full max-w-xl mx-auto mb-4 py-2 px-6 rounded-lg bg-space-800/80 border border-cyanaccent-500/40 text-center text-sm font-semibold tracking-wide text-cyanaccent-400 shadow-md" data-setfarm-element-ref="E000006" data-observable-refs="OBS_ACT_COLLECT_OBS_COLLECT_MESSAGE">
              Ready to play. Use controls to navigate lanes.
            </div>
      
            {/* Host Surface: SURF_GAME_SCENE */}
            <div data-surface-id="SURF_GAME_SCENE" className="relative w-full max-w-3xl h-[420px] rounded-2xl bg-space-900/80 border-2 border-space-700/80 shadow-2xl overflow-hidden flex flex-col" data-setfarm-element-ref="E000007" data-observable-refs="OBS_ACT_OPEN_SETTINGS_OBS_SETTINGS_SCENE_MOUNTED">
              {/* Background Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_40px]"></div>
      
              {/* Three Lanes Visual Container */}
              <div className="relative z-0 w-full h-full grid grid-cols-3 divide-x divide-space-700/60">
                
                {/* Lane 0 (Left) */}
                <div className="relative flex flex-col items-center justify-between py-6">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-slate-500">Lane 0 • Left</span>
                  
                  {/* Contained Surface: SURF_PLAYER_MARKER placed in Lane 0 */}
                  <div data-surface-id="SURF_PLAYER_MARKER" className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyanaccent-500 to-indigo-600 border-2 border-white/60 shadow-xl shadow-cyanaccent-500/30 flex flex-col items-center justify-center p-2 text-center transform transition-transform" data-setfarm-element-ref="E000008" data-observable-refs="OBS_ACT_MOVE_CENTER_OBS_CENTER_PLAYER_MARKER OBS_ACT_MOVE_LEFT_OBS_LEFT_PLAYER_MARKER OBS_ACT_MOVE_RIGHT_OBS_RIGHT_PLAYER_MARKER">
                    <span className="text-xs font-black tracking-wider uppercase text-white">Player</span>
                    <span className="text-[10px] font-bold text-cyan-200">Lane 0</span>
                  </div>
      
                  <div className="h-6"></div>
                </div>
      
                {/* Lane 1 (Center) */}
                <div className="relative flex flex-col items-center justify-between py-6">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-slate-500">Lane 1 • Center</span>
                  
                  {/* Contained Surface: SURF_STAR_MARKER located in Lane 1 */}
                  <div data-surface-id="SURF_STAR_MARKER" className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 via-staryellow-400 to-yellow-200 border-2 border-yellow-100 shadow-2xl shadow-staryellow-500/50 flex flex-col items-center justify-center p-2 text-center animate-pulse" data-setfarm-element-ref="E000009" data-observable-refs="OBS_ACT_COLLECT_OBS_COLLECT_STAR_HIDDEN OBS_ACT_RESTART_OBS_RESTART_STAR_VISIBLE">
                    <span className="text-2xl text-space-950 font-black leading-none">★</span>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-space-900 mt-1">Star</span>
                  </div>
      
                  <div className="h-6"></div>
                </div>
      
                {/* Lane 2 (Right) */}
                <div className="relative flex flex-col items-center justify-between py-6">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-slate-500">Lane 2 • Right</span>
                  <div className="flex-1 flex items-center justify-center">
                    <span className="text-xs text-slate-600 font-mono">Empty</span>
                  </div>
                  <div className="h-6"></div>
                </div>
              </div>
      
              {/* Contained Surface: SURF_SETTINGS_OVERLAY (Rendered, enabled, and pointer-operable as required by static completeness rules) */}
              <div data-surface-id="SURF_SETTINGS_OVERLAY" className="absolute inset-0 z-20 bg-space-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 border-2 border-indigo-500/30" data-setfarm-element-ref="E000010" data-observable-refs="OBS_ACT_OPEN_SETTINGS_OBS_SETTINGS_OVERLAY_VISIBLE OBS_ACT_RESTART_OBS_RESTART_SETTINGS_CLOSED OBS_ACT_RESUME_OBS_RESUME_OVERLAY_HIDDEN">
                <div className="max-w-md w-full bg-space-900 border border-space-700 rounded-2xl p-6 shadow-2xl text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-400 font-bold mb-3">
                    ⚙
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">Round Settings &amp; Pause</h2>
                  <p className="text-xs text-slate-400 mb-6">Manage game session controls and audio preferences.</p>
      
                  <div className="space-y-4 mb-6 text-left">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-space-800/80 border border-space-700">
                      <span className="text-sm font-medium text-slate-200">Sound Effects</span>
                      <span className="text-xs text-cyanaccent-400 font-bold">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-space-800/80 border border-space-700">
                      <span className="text-sm font-medium text-slate-200">Lane Assist Feedback</span>
                      <span className="text-xs text-cyanaccent-400 font-bold">Active</span>
                    </div>
                  </div>
      
                  {/* Primary Resume button in SURF_SETTINGS_OVERLAY */}
                  <button data-action="ACT_ACT_RESUME" data-control-slot="CSLOT_ACT_RESUME_CP_RESUME" className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyanaccent-500 to-indigo-600 hover:from-cyanaccent-400 hover:to-indigo-500 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-cyanaccent-500/25 transition-colors" data-setfarm-element-ref="E000011" type="button" data-action-id="resume-round-1" onClick={actions?.["resume-round-1"]}>
                    Resume Round
                  </button>
                </div>
              </div>
            </div>
          </main>
      
          {/* Bottom Action & Control Deck (Owning surface: SURF_PLAY_ROOT) */}
          <footer className="w-full max-w-6xl mx-auto mt-6 pt-6 border-t border-space-700/60">
            <div className="flex flex-col gap-5">
              
              {/* Primary Action Tier */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Start Round Button */}
                <button data-action="ACT_ACT_START" data-control-slot="CSLOT_ACT_START_CP_START" className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-colors border border-emerald-400/40" data-setfarm-element-ref="E000012" data-observable-refs="OBS_ACT_START_OBS_START_BUTTON_STATE" type="button" data-action-id="start-round-2" onClick={actions?.["start-round-2"]}>
                  Start Round
                </button>
      
                {/* Collect Star Button */}
                <button data-action="ACT_ACT_COLLECT" data-control-slot="CSLOT_ACT_COLLECT_CP_COLLECT" className="py-3 px-6 rounded-xl bg-gradient-to-r from-staryellow-500 to-amber-500 hover:from-staryellow-400 hover:to-amber-400 text-space-950 font-black text-sm uppercase tracking-wider shadow-lg shadow-staryellow-500/30 transition-colors border border-yellow-200" data-setfarm-element-ref="E000013" data-observable-refs="OBS_ACT_COLLECT_OBS_COLLECT_BUTTON_STATE" type="button" data-action-id="collect-star-3" onClick={actions?.["collect-star-3"]}>
                  Collect Star
                </button>
      
                {/* Restart Round Button */}
                <button data-action="ACT_ACT_RESTART" data-control-slot="CSLOT_ACT_RESTART_CP_RESTART" className="py-3 px-6 rounded-xl bg-space-800 hover:bg-space-700 text-slate-200 font-bold text-sm uppercase tracking-wider border border-space-700 shadow-md transition-colors" data-setfarm-element-ref="E000014" data-observable-refs="OBS_ACT_RESTART_OBS_RESTART_BUTTON_STATE" type="button" data-action-id="restart-round-4" onClick={actions?.["restart-round-4"]}>
                  Restart Round
                </button>
              </div>
      
              {/* Lane Navigation Tier */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-xs uppercase font-extrabold text-slate-400 mr-2">Lane Controls:</span>
                
                {/* Move Left */}
                <button data-action="ACT_ACT_MOVE_LEFT" data-control-slot="CSLOT_ACT_MOVE_LEFT_CP_MOVE_LEFT" className="py-2.5 px-5 rounded-lg bg-space-800 hover:bg-space-700 text-slate-200 font-bold text-xs uppercase tracking-wider border border-space-700 shadow-sm transition-colors" data-setfarm-element-ref="E000015" data-observable-refs="OBS_ACT_MOVE_LEFT_OBS_LEFT_BUTTON_STATE" type="button" data-action-id="move-left-5" onClick={actions?.["move-left-5"]}>
                  ← Move Left
                </button>
      
                {/* Move Center */}
                <button data-action="ACT_ACT_MOVE_CENTER" data-control-slot="CSLOT_ACT_MOVE_CENTER_CP_MOVE_CENTER" className="py-2.5 px-5 rounded-lg bg-space-800 hover:bg-space-700 text-slate-200 font-bold text-xs uppercase tracking-wider border border-space-700 shadow-sm transition-colors" data-setfarm-element-ref="E000016" data-observable-refs="OBS_ACT_MOVE_CENTER_OBS_CENTER_BUTTON_STATE" type="button" data-action-id="move-center-6" onClick={actions?.["move-center-6"]}>
                  Move Center
                </button>
      
                {/* Move Right */}
                <button data-action="ACT_ACT_MOVE_RIGHT" data-control-slot="CSLOT_ACT_MOVE_RIGHT_CP_MOVE_RIGHT" className="py-2.5 px-5 rounded-lg bg-space-800 hover:bg-space-700 text-slate-200 font-bold text-xs uppercase tracking-wider border border-space-700 shadow-sm transition-colors" data-setfarm-element-ref="E000017" data-observable-refs="OBS_ACT_MOVE_RIGHT_OBS_RIGHT_BUTTON_STATE" type="button" data-action-id="move-right-7" onClick={actions?.["move-right-7"]}>
                  Move Right →
                </button>
              </div>
      
              {/* Settings & Overlay Controls Deck */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <span className="text-xs uppercase font-extrabold text-slate-400 mr-2">Settings &amp; Overlay Shortcuts:</span>
      
                {/* Open Settings - Primary Slot */}
                <button data-action="ACT_ACT_OPEN_SETTINGS" data-control-slot="CSLOT_ACT_OPEN_SETTINGS_CP_COLLECT" className="py-2 px-4 rounded-lg bg-indigo-900/60 hover:bg-indigo-800/80 text-indigo-200 font-semibold text-xs tracking-wider border border-indigo-700/60 transition-colors" data-setfarm-element-ref="E000018" data-observable-refs="OBS_ACT_OPEN_SETTINGS_OBS_SETTINGS_COLLECT_DISABLED" type="button" data-action-id="open-settings-collect-deck-8" onClick={actions?.["open-settings-collect-deck-8"]}>
                  Open Settings (Collect Deck)
                </button>
      
                {/* Open Settings - Move Center Slot */}
                <button data-action="ACT_ACT_OPEN_SETTINGS" data-control-slot="CSLOT_ACT_OPEN_SETTINGS_CP_MOVE_CENTER" className="py-2 px-4 rounded-lg bg-indigo-900/60 hover:bg-indigo-800/80 text-indigo-200 font-semibold text-xs tracking-wider border border-indigo-700/60 transition-colors" data-setfarm-element-ref="E000019" data-observable-refs="OBS_ACT_OPEN_SETTINGS_OBS_SETTINGS_CENTER_DISABLED" type="button" data-action-id="open-settings-center-slot-9" onClick={actions?.["open-settings-center-slot-9"]}>
                  Open Settings (Center Slot)
                </button>
      
                {/* Open Settings - Move Left Slot */}
                <button data-action="ACT_ACT_OPEN_SETTINGS" data-control-slot="CSLOT_ACT_OPEN_SETTINGS_CP_MOVE_LEFT" className="py-2 px-4 rounded-lg bg-indigo-900/60 hover:bg-indigo-800/80 text-indigo-200 font-semibold text-xs tracking-wider border border-indigo-700/60 transition-colors" data-setfarm-element-ref="E000020" data-observable-refs="OBS_ACT_OPEN_SETTINGS_OBS_SETTINGS_LEFT_DISABLED" type="button" data-action-id="open-settings-left-slot-10" onClick={actions?.["open-settings-left-slot-10"]}>
                  Open Settings (Left Slot)
                </button>
      
                {/* Open Settings - Move Right Slot */}
                <button data-action="ACT_ACT_OPEN_SETTINGS" data-control-slot="CSLOT_ACT_OPEN_SETTINGS_CP_MOVE_RIGHT" className="py-2 px-4 rounded-lg bg-indigo-900/60 hover:bg-indigo-800/80 text-indigo-200 font-semibold text-xs tracking-wider border border-indigo-700/60 transition-colors" data-setfarm-element-ref="E000021" data-observable-refs="OBS_ACT_OPEN_SETTINGS_OBS_SETTINGS_RIGHT_DISABLED" type="button" data-action-id="open-settings-right-slot-11" onClick={actions?.["open-settings-right-slot-11"]}>
                  Open Settings (Right Slot)
                </button>
      
                {/* Open Settings - Standard Slot */}
                <button data-action="ACT_ACT_OPEN_SETTINGS" data-control-slot="CSLOT_ACT_OPEN_SETTINGS_CP_OPEN_SETTINGS" className="py-2 px-4 rounded-lg bg-indigo-900/60 hover:bg-indigo-800/80 text-indigo-200 font-semibold text-xs tracking-wider border border-indigo-700/60 transition-colors" data-setfarm-element-ref="E000022" type="button" data-action-id="open-settings-12" onClick={actions?.["open-settings-12"]}>
                  Open Settings
                </button>
      
                {/* Resume - Move Left Deck Slot */}
                <button data-action="ACT_ACT_RESUME" data-control-slot="CSLOT_ACT_RESUME_CP_MOVE_LEFT" className="py-2 px-4 rounded-lg bg-cyan-900/60 hover:bg-cyan-800/80 text-cyan-200 font-semibold text-xs tracking-wider border border-cyan-700/60 transition-colors" data-setfarm-element-ref="E000023" data-observable-refs="OBS_ACT_RESUME_OBS_RESUME_CONTROLS_RESTORED" type="button" data-action-id="resume-left-deck-slot-13" onClick={actions?.["resume-left-deck-slot-13"]}>
                  Resume (Left Deck Slot)
                </button>
              </div>
      
            </div>
          </footer>
      
        </div>
    </>
  );
}
