npm run build_prod

OUTPUT_DIR=/d/docker/qbittorrent/webui/qbit-matUI

rm -rf $OUTPUT_DIR/public
mkdir -p $OUTPUT_DIR/public
cp -R ./dist/qbit-WebUI/* $OUTPUT_DIR/public
