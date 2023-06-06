import { useAppSelector } from '../../hooks/redux';

function Settings() {
  const [wrapperWidthLeft, wrapperWidthRight] = useAppSelector(
    (state) => state.app.splitWrapperWidths
  );

  const [topWidthLeft, topWidthRight] = useAppSelector((state) => state.app.splitTopWidths);

  const [bottomWidthLeft, bottomWidthRight] = useAppSelector(
    (state) => state.app.splitBottomWidths
  );

  return (
    <div className="settings">
      <div className="panel">
        <h3>Ayarlar</h3>
        <div className="panel-item">
          <p className="bold">Yatay Pencere Değerleri:</p>
          <p>
            %{wrapperWidthLeft} ~ %{wrapperWidthRight}
          </p>
        </div>
        <div className="panel-item">
          <p className="bold">Üst Dikey Pencere Değerleri:</p>
          <p>
            %{topWidthLeft} ~ %{topWidthRight}
          </p>
        </div>
        <div className="panel-item">
          <p className="bold">Alt Dikey Pencere Değerleri:</p>
          <p>
            %{bottomWidthLeft} ~ %{bottomWidthRight}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
