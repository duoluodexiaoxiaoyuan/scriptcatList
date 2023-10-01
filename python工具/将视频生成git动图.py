# 写一段python代码，将视频生成git动图
import imageio
import moviepy.editor as mp

# 读取视频文件
clip = mp.VideoFileClip("video.mp4")

# 将视频转换为GIF动画
clip.write_gif("animation.gif")

# 打印成功消息
print("GIF动画生成成功！")


