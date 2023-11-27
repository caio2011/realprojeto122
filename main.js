function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();    
}

function draw()
{
    image(video, 0, 0, 640, 480);
    fill(0, 128, 0);
    stroke(0, 128, 0);    
    circle(320, 210, 50);
    ellipse(320, 300, 55, 110);
    rect(301, 360, 35, 150);
}

function takeSnapshot()
{
    save('studentName.png')
}